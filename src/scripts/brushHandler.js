class BrushHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupBrushSize();
  }

  setupBrushSize() {
    this.currentBrushSize = 5;
    this.brushSizeInput = document.getElementById("size-slider");
    this.brushSizeInput.addEventListener("input", () => this.updateBrushSize());
  }

  updateBrushSize() {
    this.currentBrushSize = parseInt(this.brushSizeInput.value);
    this.setBrushStyling();
  }
  
  setBrushStyling(
    color = this.canvasHandler.colorHandler.currentColor,
    brushSize = this.currentBrushSize
  ) {
    this.canvasHandler.ctx.lineCap = "round";
    this.canvasHandler.ctx.lineWidth = brushSize;
    this.canvasHandler.ctx.strokeStyle = color;
  }
}

export default BrushHandler;
