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

    this.setupUndoBtn()
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

  setupUndoBtn() {
    this.drawnPaths = [];
    this.undoBtn = document.getElementById("undo");
    this.undoBtn.addEventListener("click", () => this.undo());
  }

  startDrawing(e) {
    // clear the stack when a new drawing begins
    if (!this.isDrawing) {
      this.currentPath = [];
    }

    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.clientX - this.canvas.offsetLeft,
      e.clientY - this.canvas.offsetTop
    );
  }

  draw(e) {
    if (!this.isDrawing) return;

    const x = e.clientX - this.canvas.offsetLeft;
    const y = e.clientY - this.canvas.offsetTop;

    this.ctx.lineTo(x, y);

    // styling
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = this.currentColor;

    this.ctx.stroke();

    // store the current point in the drawing path
    this.currentPath.push({ x, y, color: this.currentColor });
  }

  stopDrawing() {
    // save the current path to the stack
    if (this.isDrawing) this.drawnPaths.push(this.currentPath);
    this.isDrawing = false;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.style.backgroundColor = "white";
  }

  undo() {
    if (this.drawnPaths.length > 0) {
      // remove the last drawn path from the stack
      this.drawnPaths.pop();

      // // clear the canvas first
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // then redraw the remaining paths
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
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
