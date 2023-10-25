import Pickr from "@simonwep/pickr";

class ColorHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupColorPicker();
    this.setupColorHandling();
  }

  setupColorPicker () {
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
    // color change event for brush color
    this.brushColorPicker.on("change", (color) => {
      this.currentColor = color.toHEXA().toString()
    });
  }
}

export default ColorHandler;
