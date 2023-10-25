import Pickr from "@simonwep/pickr";

class ColorHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupColorPicker();
    this.setupColorHandling();
  }

  setupColorPicker() {
    this.brushColorPicker = Pickr.create({
      el: "#color-picker",
      theme: "classic",
      default: "#ECD1E2",
      components: {
        preview: true,
        hue: true,
      },
    });
    // have the color picker be open immediately
    this.brushColorPicker.show();
  }

  setupColorHandling() {
    this.currentColor = "black";
    this.bgColor = "#FFFFFF";
    // color change event for brush color
    this.brushColorPicker.on("change", (color) => {
      const selectedMode = this.getSelectedMode();
      if (selectedMode === "background-color-pickr") {
        this.bgColor = color.toHEXA().toString();
        this.bgColorChange()
      } else if (selectedMode === "brush") {
        this.currentColor = color.toHEXA().toString();
        this.canvasHandler.brushHandler.setBrushStyling(
          color.toHEXA().toString()
        );
      } else if (selectedMode === "eraser") {
        this.currentColor = color.toHEXA().toString();
        this.canvasHandler.brushHandler.setBrushStyling(
          color.toHEXA().toString()
        );
      }
    });
  }

  bgColorChange() {
    const drawnPaths = this.canvasHandler.undoAndRedoHandler.drawnPaths;
    const redoStack = this.canvasHandler.undoAndRedoHandler.redoStack;
    this.canvasHandler.eraseAndClearHandler.clear();
    this.canvasHandler.undoAndRedoHandler.drawnPaths = drawnPaths;
    this.canvasHandler.undoAndRedoHandler.redoStack = redoStack;
    drawnPaths.forEach((path) =>
      this.canvasHandler.undoAndRedoHandler.redrawPath(path)
    );
    this.canvasHandler.canvas.style.backgroundColor = this.bgColor;
  }

  getSelectedMode() {
    const radioButtons = document.getElementsByName("tool");
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        return radioButton.id;
      }
    }
  }
}

export default ColorHandler;
