import DrawingHandler from "./drawingHandler";
import ColorHandler from "./colorHandler";
import BrushHandler from "./brushHandler";
import UndoAndRedoHandler from "./UndoAndRedoHandler";
import DownloadHandler from "./downloadHandler";

class CanvasHandler {
  constructor() {
    this.setupCanvas();
    this.setupCanvasProportions();
    this.setupEraser();
    this.setupClearBtn();

    this.drawingHandler = new DrawingHandler(this);
    this.colorHandler = new ColorHandler(this);
    this.brushHandler = new BrushHandler(this);
    this.undoAndRedoHandler = new UndoAndRedoHandler(this);
    this.downloadHandler = new DownloadHandler(this);
  }

  // setting up the canvas
  setupCanvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;
  }

  setupCanvasProportions() {
    const topMargin = 100;
    const bottomMargin = 100;

    this.canvas.style.position = "absolute";
    this.canvas.style.top = topMargin + "px";

    this.canvas.height = window.innerHeight - topMargin - bottomMargin;
    this.canvas.width = window.innerWidth;
  }

  setupClearBtn() {
    this.clearBtn = document.getElementById("clear");
    this.clearBtn.addEventListener("click", () => this.clear());
  }

  setupEraser() {
    this.eraserCheckbox = document.getElementById("eraser");
  }

  // btn actions
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.style.backgroundColor = "white";
    this.redoStack = [];
    this.drawnPaths = [];
  }
}

export default CanvasHandler;
