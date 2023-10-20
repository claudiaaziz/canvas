import ColorHandler from "./color_handler";
import DrawingHandler from "./drawing_handler";
import UndoHandler from "./undo_handler";

class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.setupCanvas();
    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;

    this.colorHandler = new ColorHandler(this.canvas, this.drawingHandler)
    this.drawingHandler = new DrawingHandler(this.canvas, this.ctx, this.colorHandler)
    this.undoHandler = new UndoHandler(this.ctx, this.drawingHandler, this.colorHandler)
    this.setupEventListeners()

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

  setupEventListeners() {
    this.canvas.addEventListener("mousedown", this.drawingHandler.startDrawing.bind(this.drawingHandler));
    this.canvas.addEventListener("mousemove", this.drawingHandler.draw.bind(this.drawingHandler));
    this.canvas.addEventListener("mouseup", this.drawingHandler.stopDrawing.bind(this.drawingHandler));
    this.canvas.addEventListener("mouseout", this.drawingHandler.stopDrawing.bind(this.drawingHandler));

    this.colorHandler.setupColorHandeling()
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.style.backgroundColor = "white";
  }

  redrawPath(path) {
    path.forEach((point, index) => {
      if (index === 0) {
        // Move to the starting point of the path
        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
      } else {
        // Draw a line to the next point
        this.ctx.lineTo(point.x, point.y);
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = point.color;
        this.ctx.stroke();
      }
    });
  }

  changeBackgroundColor() {
    this.canvas.style.backgroundColor = this.backgroundInput.value;
  }
}

export default Canvas;
