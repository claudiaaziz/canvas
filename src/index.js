import Canvas from "./scripts/canvas";
import Brush from "./scripts/brush";

document.addEventListener("DOMContentLoaded", () => {
  new Canvas();
});

document.addEventListener("DOMContentLoaded", () => {
  const colorPickerInput = document.getElementById("color-picker");

  // Initialize pickr Color Picker and show immediately
  const pickr = Pickr.create({
    el: colorPickerInput,
    theme: "classic",
    default: "#ECD1E2", // No default color, let users choose from the color wheel
    components: {
      preview: true,
      opacity: true,
      hue: true,
      interaction: {
        hex: true,
        rgba: true,
        hsla: true,
        hsva: true,
        cmyk: true,
        input: true,
        clear: true,
        save: true,
      },
    },
  });

  // Show the color picker immediately
  pickr.show();
});
