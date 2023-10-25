import DrawingHandler from "./drawingHandler";
import ColorHandler from "./colorHandler";
import BrushHandler from "./brushHandler";
import EraseAndClearHandler from "./eraseAndClearHandler";
import UndoAndRedoHandler from "./undoAndRedoHandler";
import DownloadHandler from "./downloadHandler";

class CanvasHandler {
  constructor() {
    this.setupCanvas();
    this.setupCanvasProportions();

    this.drawingHandler = new DrawingHandler(this);
    this.colorHandler = new ColorHandler(this);
    this.brushHandler = new BrushHandler(this);
    this.eraseAndClearHandler = new EraseAndClearHandler(this);
    this.undoAndRedoHandler = new UndoAndRedoHandler(this);
    this.downloadHandler = new DownloadHandler(this);
  }

  setupCanvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  setupCanvasProportions() {
    const topMargin = 100;
    const bottomMargin = 140;

    this.canvas.style.position = "absolute";
    this.canvas.style.top = topMargin + "px";

    this.canvas.height = window.innerHeight - topMargin - bottomMargin;
    this.canvas.width = window.innerWidth;
  }
}

export default CanvasHandler;
