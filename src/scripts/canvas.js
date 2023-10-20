class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.colorButtons = document.querySelectorAll(".colorButton");
    this.colorInput = document.querySelector("input[type=color]")

    this.setupCanvas();
    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;

    this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
    this.canvas.addEventListener("mousemove", this.draw.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
    this.canvas.addEventListener("mouseout", this.stopDrawing.bind(this));

    this.colorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.currentColor = button.style.backgroundColor;
      });
    });

    this.colorInput.addEventListener("input", (e) => {
      this.currentColor = e.target.value
    })
  }

  setupCanvas() {
    const topMargin = 100;
    const bottomMargin = 100;

    this.canvas.style.position = "absolute";
    this.canvas.style.top = topMargin + "px";

    this.canvas.height = window.innerHeight - topMargin - bottomMargin;
    this.canvas.width = window.innerWidth;
  }

  startDrawing(e) {
    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.clientX - this.canvas.offsetLeft,
      e.clientY - this.canvas.offsetTop
    );
    this.draw(e);
  }

  draw(e) {
    if (!this.isDrawing) return;
    this.ctx.lineTo(e.clientX - this.canvas.offsetLeft,e.clientY - this.canvas.offsetTop
    );
    this.ctx.stroke();
    this.ctx.strokeStyle = this.currentColor; 
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  // clear() {

  // }
}

export default Canvas;
