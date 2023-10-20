class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.setupCanvas();
    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;

    this.setupDrawingEventListeners();
    this.setupColorHandeling();

    this.backgroundInput = document.getElementById("background-color-picker");
    this.backgroundInput.addEventListener("input", () =>
      this.changeBackgroundColor()
    );

    this.clearBtn = document.getElementById("clear");
    this.clearBtn.addEventListener("click", () => this.clear());
  }

  setupCanvas() {
    const topMargin = 100;
    const bottomMargin = 100;

    this.canvas.style.position = "absolute";
    this.canvas.style.top = topMargin + "px";

    this.canvas.height = window.innerHeight - topMargin - bottomMargin;
    this.canvas.width = window.innerWidth;
  }

  setupDrawingEventListeners() {
    this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
    this.canvas.addEventListener("mousemove", this.draw.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
    this.canvas.addEventListener("mouseout", this.stopDrawing.bind(this));
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

  startDrawing(e) {
    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.clientX - this.canvas.offsetLeft,
      e.clientY - this.canvas.offsetTop
    );
  }

  draw(e) {
    if (!this.isDrawing) return;
    this.ctx.lineTo(
      e.clientX - this.canvas.offsetLeft,
      e.clientY - this.canvas.offsetTop
    );
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.stroke();
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.style.backgroundColor = "white";
  }

  changeBackgroundColor() {
    this.canvas.style.backgroundColor = this.backgroundInput.value;
  }
}

export default Canvas;
