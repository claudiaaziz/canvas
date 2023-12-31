class DrawingHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupDrawingEventListeners();
  }

  setupDrawingEventListeners() {
    this.canvasHandler.canvas.addEventListener("mousedown", (e) =>
      this.startDrawing(e)
    );
    this.canvasHandler.canvas.addEventListener("mousemove", (e) =>
      this.draw(e)
    );
    this.canvasHandler.canvas.addEventListener("mouseup", () =>
      this.stopDrawing()
    );
    this.canvasHandler.canvas.addEventListener("mouseout", () =>
      this.stopDrawing()
    );
  }

  startDrawing(e) {
    if (!this.isDrawing) {
      // clear the stacks when a new drawing begins
      this.currentPath = [];
      this.redoStack = [];
      this.isDrawing = true;
    }

    // calculate the adjusted mouse coordinates relative to the canvas
    const canvasMouseX = e.clientX - this.canvasHandler.canvas.offsetLeft;
    const canvasMouseY = e.clientY - this.canvasHandler.canvas.offsetTop;

    // begin a new path in the canvas ctx & move to initial drawing pos
    this.canvasHandler.ctx.beginPath();

    // move the brush to the adjusted mouse coordinates
    this.canvasHandler.ctx.moveTo(canvasMouseX, canvasMouseY);

    // store the starting point in the drawing path
    this.currentPath.push({
      x: canvasMouseX,
      y: canvasMouseY,
      color: this.canvasHandler.colorHandler.currentColor,
      brushSize: this.canvasHandler.brushHandler.currentBrushSize,
    });

    // draw a dot at the starting point
    this.draw(e);
  }

  draw(e) {
    if (!this.isDrawing) return;

    // calculate the adjusted mouse coordinates relative to the canvas
    const mouseX = e.clientX - this.canvasHandler.canvas.offsetLeft;
    const mouseY = e.clientY - this.canvasHandler.canvas.offsetTop;

    // connect the current drawing position to the new position
    this.canvasHandler.ctx.lineTo(mouseX, mouseY);

    // Set brush styling based on whether eraser or brush is checked
    const color = this.canvasHandler.eraseAndClearHandler.eraserCheckbox.checked
      ? this.canvasHandler.colorHandler.bgColor
      : this.canvasHandler.colorHandler.currentColor;

    this.canvasHandler.brushHandler.setBrushStyling(
      color,
      this.canvasHandler.brushHandler.currentBrushSize
    );

    // draw the line on the canvas
    this.canvasHandler.ctx.stroke();

    // store the current point in the drawing path
    this.currentPath.push({
      x: mouseX,
      y: mouseY,
      color: color,
      brushSize: this.canvasHandler.brushHandler.currentBrushSize,
    });
  }

  stopDrawing() {
    if (this.canvasHandler.eraseAndClearHandler.eraserCheckbox.checked)
      this.currentPath.isErase = true;
    if (this.isDrawing) {
      this.canvasHandler.RedoAndUndoHandler.drawnPaths.push(this.currentPath); // if currently drawing, save the current path to the stack (for undo feature)
      this.isDrawing = false;
    }
  }
}

export default DrawingHandler;
