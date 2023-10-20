class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.setupCanvas();
    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;

    this.setupEventListeners()
    this.setupColorHandeling()
  }

  setupCanvas() {
    const topMargin = 100;
    const bottomMargin = 100;

    this.canvas.style.position = "absolute";
    this.canvas.style.top = topMargin + "px";

    this.canvas.height = window.innerHeight - topMargin - bottomMargin;
    this.canvas.width = window.innerWidth;
  }

  setupEventListeners() {
    this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
    this.canvas.addEventListener("mousemove", this.draw.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
    this.canvas.addEventListener("mouseout", this.stopDrawing.bind(this));
  }

  setupColorHandeling() {
    // if a color was selected..
    this.colorButtons = document.querySelectorAll(".colorButton");
    this.colorInput = document.querySelector("input[type=color]");

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
    this.ctx.moveTo(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);
    // this.draw(e); 
  }

  draw(e) {
    if (!this.isDrawing) return;
    this.ctx.lineTo(e.clientX - this.canvas.offsetLeft,e.clientY - this.canvas.offsetTop
    );
    this.ctx.strokeStyle = this.currentColor; 
    this.ctx.stroke();
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  // clear() {

  // }
}

export default Canvas;
