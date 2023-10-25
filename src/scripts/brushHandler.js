class BrushHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupBrushSize();
  }

  setupBrushSize() {
    this.brushSizeInput = document.getElementById("size-slider");
    this.brushSizeInput.addEventListener("input", () => this.updateBrushSize());
    this.currentBrushSize = 5;
  }

  setBrushStyling(
    color = this.canvasHandler.colorHandler.currentColor,
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
