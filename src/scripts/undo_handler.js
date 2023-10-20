class UndoHandler {
  constructor(ctx, drawingHandler, colorHandler) {
    this.ctx = ctx;
    this.drawingHandler = drawingHandler;
    this.colorHandler = colorHandler;
    this.undoBtn = document.getElementById("undo");
    this.drawnPaths = [];
    this.undoBtn.addEventListener("click", () => this.undo());
  }

  undo() {
    if (this.drawnPaths.length > 0) {
      // remove the last drawn path from the stack
      this.drawnPaths.pop();

      // // clear the canvas first
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // then redraw the remaining paths
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }
}

export default UndoHandler;
