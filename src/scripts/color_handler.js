class ColorHandler {
  constructor(canvas, drawingHandler) {
    this.canvas = canvas;
    this.drawingHandler = drawingHandler;
    this.colorButtons = document.querySelectorAll(".colorButton");
    this.colorInput = document.getElementById("color-picker");
    this.currentColor = "black";
  }

  setupColorHandeling() {
    // if a color has been selected..
    this.colorButtons = document.querySelectorAll(".colorButton");
    this.colorInput = document.getElementById("color-picker");

    this.colorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.currentColor = button.style.backgroundColor;
      });
    });

    this.colorInput.addEventListener("input", (e) => {
      this.currentColor = e.target.value;
    });
  }
}

export default ColorHandler;