class ColorHandler {
  constructor(canvasHandler) {
    this.setupColorHandling()
    this.canvasHandler = canvasHandler
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
    this.bgColorPicker.addEventListener(
      "input",
      () => {
        const drawnPaths = this.canvasHandler.drawnPaths
        const redoStack = this.canvasHandler.redoStack
        this.canvasHandler.clear()
        this.canvasHandler.drawnPaths = drawnPaths
        this.canvasHandler.redoStack = redoStack
        drawnPaths.forEach((path) => this.canvasHandler.redrawPath(path));
        this.canvasHandler.canvas.style.backgroundColor = this.bgColorPicker.value;
      }
    );
  }
}

export default ColorHandler