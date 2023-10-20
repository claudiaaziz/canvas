class DrawingHandler {
  constructor(canvas, ctx, colorHandler) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.colorHandler = colorHandler
    this.isDrawing = false;
    this.currentPath = [];
    this.drawnPaths = [];
  }

  startDrawing(e) {
    // clear the stack when a new drawing begins
    if (!this.isDrawing) {
      this.currentPath = [];
    }

    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.clientX - this.canvas.offsetLeft,
      e.clientY - this.canvas.offsetTop
    );
  }

  draw(e) {
    if (!this.isDrawing) return;

    const x = e.clientX - this.canvas.offsetLeft;
    const y = e.clientY - this.canvas.offsetTop;

    this.ctx.lineTo(x, y);

    // styling
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = this.colorHandler.currentColor;

    this.ctx.stroke();

    // store the current point in the drawing path
    this.currentPath.push({ x, y, color: this.colorHandler.currentColor });
  }

  stopDrawing() {
    // save the current path to the stack
    if (this.isDrawing) this.drawnPaths.push(this.currentPath);
    this.isDrawing = false;
  }
}

export default DrawingHandler;
