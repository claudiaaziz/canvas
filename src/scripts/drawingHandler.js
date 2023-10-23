class DrawingHandler {
  constructor(canvasHandler, colorHandler) {
    this.canvasHandler = canvasHandler
    this.canvas = this.canvasHandler.canvas
    this.colorHandler = colorHandler
    this.setupDrawingEventListeners()
  }

  setupDrawingEventListeners() {
    this.canvas.addEventListener("mousedown", (e) => this.startDrawing(e));
    this.canvas.addEventListener("mousemove", (e) => this.draw(e));
    this.canvas.addEventListener("mouseup", () => this.stopDrawing());
    this.canvas.addEventListener("mouseout", () => this.stopDrawing());
  }

  // // drawing actions
  startDrawing(e) {
    if (!this.isDrawing) {
      // clear the stacks when a new drawing begins
      this.currentPath = [];
      this.redoStack = [];
      this.isDrawing = true;
    }

    // calculate the adjusted mouse coordinates relative to the canvas
    const canvasMouseX = e.clientX - this.canvas.offsetLeft;
    const canvasMouseY = e.clientY - this.canvas.offsetTop;

    // begin a new path in the canvas ctx & move to initial drawing pos
    this.canvasHandler.ctx.beginPath();

    // move the brush to the adjusted mouse coordinates
    this.canvasHandler.ctx.moveTo(canvasMouseX, canvasMouseY);

    // store the starting point in the drawing path
    this.currentPath.push({
      x: canvasMouseX,
      y: canvasMouseY,
      color: this.colorHandler.currentColor,
      brushSize: this.canvasHandler.currentBrushSize,
    });

    // draw a dot at the starting point
    this.draw(e);
  }

  draw(e) {
    if (!this.isDrawing) return;

    // calculate the adjusted mouse coordinates relative to the canvas
    const mouseX = e.clientX - this.canvas.offsetLeft;
    const mouseY = e.clientY - this.canvas.offsetTop;

    // connect the current drawing position to the new position
    this.canvasHandler.ctx.lineTo(mouseX, mouseY);

    // Set brush styling based on whether eraser or brush is checked
    const color = this.canvasHandler.eraserCheckbox.checked
      ? this.colorHandler.bgColorPicker.value
      : this.colorHandler.currentColor;

    this.canvasHandler.setBrushStyling(color, this.canvasHandler.currentBrushSize);

    // draw the line on the canvas
    this.canvasHandler.ctx.stroke();

    // store the current point in the drawing path
    this.currentPath.push({
      x: mouseX,
      y: mouseY,
      color: color,
      brushSize: this.canvasHandler.currentBrushSize,
    });
  }

  stopDrawing() {
    if (this.canvasHandler.eraserCheckbox.checked) this.currentPath.isErase = true;
    if (this.isDrawing) {
      this.canvasHandler.drawnPaths.push(this.currentPath); // if currently drawing, save the current path to the stack (for undo feature)
      this.isDrawing = false;
    }
  }
}

export default DrawingHandler