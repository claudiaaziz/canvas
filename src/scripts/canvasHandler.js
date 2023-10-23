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

    this.colorHandler = new ColorHandler(this);
    this.brushHandler = new BrushHandler(this, this.colorHandler);
    this.drawingHandler = new DrawingHandler(
      this,
      this.colorHandler,
      this.brushHandler
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
}

export default CanvasHandler;
