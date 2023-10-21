class Canvas {
  constructor() {
    this.setupCanvas();
    this.setupCanvasProportions();
    this.setupDrawingEventListeners();
    this.setupColorHandling();
    this.setupUndoBtn();
    this.setupRedoBtn();
    this.setupClearBtn();
  }

  // setting up the canvas
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
    this.canvas.addEventListener("mousedown", (e) => this.startDrawing(e));
    this.canvas.addEventListener("mousemove", (e) => this.draw(e));
    this.canvas.addEventListener("mouseup", () => this.stopDrawing());
    this.canvas.addEventListener("mouseout", () => this.stopDrawing());
  }

  setupColorHandling() {
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

  setupRedoBtn() {
    this.redoStack = [];
    this.redoBtn = document.getElementById("redo");
    this.redoBtn.addEventListener("click", () => this.redo());
  }

  setupClearBtn() {
    this.clearBtn = document.getElementById("clear");
    this.clearBtn.addEventListener("click", () => this.clear());
  }

  // drawing actions
  startDrawing(e) {
    // clear the stacks when a new drawing begins
    if (!this.isDrawing) {
      this.currentPath = [];
      this.redoStack = [];
    }

    this.isDrawing = true;

    // begin a new path in the canvas ctx & move to initial drawing pos
    this.ctx.beginPath();

    // calculate the adjusted mouse coordinates relative to the canvas
    const canvasMouseX = e.clientX - this.canvas.offsetLeft;
    const canvasMouseY = e.clientY - this.canvas.offsetTop;

    // move the brush to the adjusted mouse coordinates
    this.ctx.moveTo(canvasMouseX, canvasMouseY);
  }

  draw(e) {
    if (!this.isDrawing) return;

    // calculate the adjusted mouse coordinates relative to the canvas
    const mouseX = e.clientX - this.canvas.offsetLeft;
    const mouseY = e.clientY - this.canvas.offsetTop;

    // connect the current drawing position to the new position
    this.ctx.lineTo(mouseX, mouseY);

    this.setBrushStyling();

    // draw the line on the canvas
    this.ctx.stroke();

    // store the current point in the drawing path
    this.currentPath.push({ x: mouseX, y: mouseY, color: this.currentColor });
  }

  stopDrawing() {
    if (this.isDrawing) {
      this.drawnPaths.push(this.currentPath); // if currently drawing, save the current path to the stack (for undo feature)
      this.isDrawing = false;
    }
  }

  setBrushStyling(color = this.currentColor) {
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = color;
  }

  // btn actions
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.style.backgroundColor = "white";
    this.redoStack = [];
    this.drawnPaths = [];
  }

  undo() {
    // if there are paths in the stack
    if (this.drawnPaths.length > 0) {
      // clear canvas (to prep for redraw)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // remove (undo) last drawn path from the stack
      const undonePath = this.drawnPaths.pop();
      // push the undone path to redo stack
      this.redoStack.push(undonePath);

      // redraw all paths that are still in the stack with the correct color
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }

  redrawPath(path, isUndo = true) {
    path.forEach((point, idx) => {
      // if it's the starting point of the path
      if (idx === 0) {
        // move to the starting point
        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
      } else {
        // draw a line to the next point
        this.ctx.lineTo(point.x, point.y);

        // set brush styling color based on whether it's an undo or not
        this.setBrushStyling(isUndo ? point.color : this.currentColor);

        this.ctx.stroke();
      }
    });
  }

  redo() {
    // if there are paths in the redo stack
    if (this.redoStack.length > 0) {
      // clear canvas (to prep for redraw)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // remove (redo) last undone path from the redo stack
      const redonePath = this.redoStack.pop();

      // push the redone path to drawnPaths stack
      this.drawnPaths.push(redonePath);

      // redraw all paths with the correct color
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }
}

export default Canvas;
