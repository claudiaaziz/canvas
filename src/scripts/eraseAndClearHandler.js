class EraseAndClearHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupEraser();
    this.setupClearBtn();
  }

  setupClearBtn() {
    this.clearBtn = document.getElementById("clear");
    this.clearBtn.addEventListener("click", () => this.clear());
  }

  setupEraser() {
    this.eraserCheckbox = document.getElementById("eraser");
  }

  clear() {
    this.canvasHandler.ctx.clearRect(0, 0, this.canvasHandler.canvas.width, this.canvasHandler.canvas.height);
    this.canvasHandler.canvas.style.backgroundColor = "white";
    this.canvasHandler.undoAndRedoHandler.redoStack = [];
    this.canvasHandler.undoAndRedoHandler.drawnPaths = [];
  }
}

export default EraseAndClearHandler;