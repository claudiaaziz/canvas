class UndoAndRedoHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupUndoBtn()
    this.setupRedoBtn()
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

  undo() {
    // if there are paths in the stack
    if (this.drawnPaths.length > 0) {
      // clear canvas (to prep for redraw)
      this.canvasHandler.ctx.clearRect(0, 0, this.canvasHandler.canvas.width, this.canvasHandler.canvas.height);

      // remove (undo) last drawn path from the stack
      const undonePath = this.drawnPaths.pop();
      // push the undone path to redo stack
      this.redoStack.push(undonePath);

      // redraw all paths that are still in the stack
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }

  redrawPath(path) {
    path.forEach((point, idx) => {
      // if it's the starting point of the path
      if (idx === 0) {
        // move to the starting point
        this.canvasHandler.ctx.beginPath();
        this.canvasHandler.ctx.moveTo(point.x, point.y);
      } else {
        // draw a line to the next point
        this.canvasHandler.ctx.lineTo(point.x, point.y);

        // set brush styling based on point clr & brush size
        if (path.isErase) point.color = this.canvasHandler.colorHandler.bgColor;
        this.canvasHandler.brushHandler.setBrushStyling(point.color, point.brushSize);

        this.canvasHandler.ctx.stroke();
      }
    });
  }

  redo() {
    // if there are paths in the redo stack
    if (this.redoStack.length > 0) {
      // clear canvas (to prep for redraw)
      this.canvasHandler.ctx.clearRect(0, 0, this.canvasHandler.canvas.width, this.canvasHandler.canvas.height);

      // remove (redo) last undone path from the redo stack
      const redonePath = this.redoStack.pop();
      // push the redone path to drawnPaths stack
      this.drawnPaths.push(redonePath);

      // redraw all paths with the correct color
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }
}

export default UndoAndRedoHandler;
