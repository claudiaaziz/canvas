class ColorHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler
    this.setupColorHandling()
  }

  setupColorHandling() {
    this.currentColor = "black";

    // if a brush color has been selected..
    this.brushColorPicker = document.getElementById("color-picker");
    this.brushColorPicker.addEventListener("input", () => {
      this.currentColor = this.brushColorPicker.value;
    });

    // if a bg color has been selected..
    this.bgColorPicker = document.getElementById("background-color-picker");

    // for erase action
    this.bgColorPicker.addEventListener(
      "input",
      () => {
        const drawnPaths = this.canvasHandler.undoAndRedoHandler.drawnPaths;
        const redoStack = this.canvasHandler.undoAndRedoHandler.redoStack;
        this.canvasHandler.eraseAndClearHandler.clear();
        this.canvasHandler.undoAndRedoHandler.drawnPaths = drawnPaths;
        this.canvasHandler.undoAndRedoHandler.redoStack = redoStack;
        this.canvasHandler.undoAndRedoHandler.drawnPaths.forEach((path) =>
          this.canvasHandler.undoAndRedoHandler.redrawPath(path)
        );
        this.canvasHandler.canvas.style.backgroundColor = this.bgColorPicker.value;
      }
    );
  }
}

export default ColorHandler