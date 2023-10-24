import BrushHandler from "./brushHandler";
import ColorHandler from "./colorHandler";
import DrawingHandler from "./drawingHandler";

class CanvasHandler {
  constructor() {
    this.setupCanvas();
    this.setupCanvasProportions();
    this.setupEraser();
    this.setupUndoBtn();
    this.setupRedoBtn();
    this.setupClearBtn();
    this.setupDownloadBtn();

    this.colorHandler = new ColorHandler(this);
    this.brushHandler = new BrushHandler(this);
    this.drawingHandler = new DrawingHandler(
      this,
      this.colorHandler
    );
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

  setupUndoBtn() {
    this.drawnPaths = [];
    this.undoBtn = document.getElementById("undo");
    this.undoBtn.addEventListener("click", () => this.undo());
  }

  setupRedoBtn() {
    this.redoStack = [];
    this.redoBtn = document.getElementById("redo");
    this.redoBtn.addEventListener("click", () => this.redo());
  }

  setupDownloadBtn() {
    this.downloadBtn = document.getElementById("download");
    this.downloadBtn.addEventListener("click", () => this.download());
  }

  // btn actions
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.style.backgroundColor = "white";
    this.redoStack = [];
    this.drawnPaths = [];
  }

  undo() {
    // if there are paths in the stack
    if (this.drawnPaths.length > 0) {
      // clear canvas (to prep for redraw)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // remove (undo) last drawn path from the stack
      const undonePath = this.drawnPaths.pop();
      // push the undone path to redo stack
      this.drawingHandler.redoStack.push(undonePath);

      // redraw all paths that are still in the stack
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }

  redrawPath(path) {
    path.forEach((point, idx) => {
      // if it's the starting point of the path
      if (idx === 0) {
        // move to the starting point
        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
      } else {
        // draw a line to the next point
        this.ctx.lineTo(point.x, point.y);

        // set brush styling based on point clr & brush size
        if (path.isErase) point.color = this.colorHandler.bgColorPicker.value;
        this.brushHandler.setBrushStyling(point.color, point.brushSize);

        this.ctx.stroke();
      }
    });
  }

  redo() {
    // if there are paths in the redo stack
    if (this.drawingHandler.redoStack.length > 0) {
      // clear canvas (to prep for redraw)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // remove (redo) last undone path from the redo stack
      const redonePath = this.drawingHandler.redoStack.pop();
      // push the redone path to drawnPaths stack
      this.drawnPaths.push(redonePath);

      // redraw all paths with the correct color
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }

  download() {
    // create a temp canvas to preserve the background (wo this the bg would be transparent)
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = this.canvas.width;
    tempCanvas.height = this.canvas.height;

    // set the background color on the temp canvas
    tempCtx.fillStyle = this.canvas.style.backgroundColor;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // draw the existing canvas content on top of the background 
    tempCtx.drawImage(this.canvas, 0, 0);

    // get the data URL of the temp canvas
    const dataUrl = tempCanvas.toDataURL("image/png");

    // create a link ele for download
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "canvas.png";

    // trigger the download
    link.click();
  }
}

export default CanvasHandler;
