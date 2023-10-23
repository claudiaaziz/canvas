class BrushHandler {
  // dotted brush, glitter brush?
  constructor(canvasHandler, colorHandler) {
    this.canvasHandler = canvasHandler;
    this.colorHandler = colorHandler
    this.setupBrushSize()
  }

  setupBrushSize() {
    this.brushSizeInput = document.getElementById("size-slider");
    this.brushSizeInput.addEventListener("input", () => this.updateBrushSize());
    this.currentBrushSize = 5;
  }

  setBrushStyling(
    color = this.colorHandler.currentColor,
    brushSize = this.currentBrushSize
  ) {
    this.canvasHandler.ctx.lineCap = "round";
    this.canvasHandler.ctx.lineWidth = brushSize;
    this.canvasHandler.ctx.strokeStyle = color;
  }

  updateBrushSize() {
    this.currentBrushSize = parseInt(this.brushSizeInput.value);
    this.setBrushStyling();
  }
}

export default BrushHandler;
