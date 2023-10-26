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
      inline: true,
      showAlways: true,
      default: "#ECD1E2",
      components: {
        preview: true,
        hue: true,
      },
    });
  }

  setupColorHandling() {
    this.currentColor = "black";
    this.bgColor = "#FFFFFF";
    // color change event for brush color
    this.brushColorPicker.on("change", (color) => {
      const selectedMode = this.getSelectedMode();
      if (selectedMode === "background-color-pickr") {
        this.bgDebounce = setTimeout(() => {
          this.bgDebounce = undefined;
          this.bgColor = color.toHEXA().toString();
          this.bgColorChange();
        }, 300);
      } else {
        this.currentColor = color.toHEXA().toString();
        this.canvasHandler.brushHandler.setBrushStyling(
          color.toHEXA().toString()
        );
      }
    });
  }

  bgColorChange() {
    const drawnPaths = this.canvasHandler.RedoAndUndoHandler.drawnPaths;
    const redoStack = this.canvasHandler.RedoAndUndoHandler.redoStack;

    this.canvasHandler.eraseAndClearHandler.clear();
    this.canvasHandler.RedoAndUndoHandler.drawnPaths = drawnPaths;
    this.canvasHandler.RedoAndUndoHandler.redoStack = redoStack;
    drawnPaths.forEach((path) =>
      this.canvasHandler.RedoAndUndoHandler.redrawPath(path)
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
