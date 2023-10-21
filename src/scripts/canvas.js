class Canvas {
  constructor() {
    this.setupCanvas();
    this.setupCanvasProportions();
    this.setupDrawingEventListeners();
    this.setupColorHandeling();
    this.setupUndoBtn();
    this.setupClearBtn();
  }

  setupCanvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;
  }

  setupCanvasProportions() {
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
    // if a brush color has been selected..
    this.colorBtns = document.querySelectorAll(".color-btn");
    this.brushColorPicker = document.getElementById("color-picker");

    this.colorBtns.forEach((colorbtn) => {
      colorbtn.addEventListener("click", () => {
        this.currentColor = colorbtn.style.backgroundColor;
      });
    });

    this.brushColorPicker.addEventListener("input", () => {
      this.currentColor = this.brushColorPicker.value;
    });

    // if a bg color has been selected..
    this.bgColorPicker = document.getElementById("background-color-picker");
    this.bgColorPicker.addEventListener(
      "input",
      () => (this.canvas.style.backgroundColor = this.bgColorPicker.value)
    );
  }

  setupUndoBtn() {
    this.drawnPaths = [];
    this.undoBtn = document.getElementById("undo");
    this.undoBtn.addEventListener("click", () => this.undo());
  }

  setupClearBtn() {
    this.clearBtn = document.getElementById("clear");
    this.clearBtn.addEventListener("click", () => this.clear());
  }

  startDrawing(e) {
    // clear the stack when a new drawing begins
    if (!this.isDrawing) {
      this.currentPath = [];
    }

    this.isDrawing = true;

    // Begin a new path in the canvas ctx & move to the initial drawing position
    this.ctx.beginPath();

    // Calculate the adjusted mouse coordinates relative to the canvas
    const canvasMouseX = e.clientX - this.canvas.offsetLeft;
    const canvasMouseY = e.clientY - this.canvas.offsetTop;

    // Move the brush to the adjusted mouse coordinates
    this.ctx.moveTo(canvasMouseX, canvasMouseY);
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
    // Clear the entire canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Pop the last drawn path from the stack
    if (this.drawnPaths.length > 0) {
      this.drawnPaths.pop();

      // Redraw all paths with the correct colors
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
}

export default Canvas;
