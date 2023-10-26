# Canvas

[Canvas](https://claudiaaziz.github.io/canvas/) is a drawing app that provides a digital canvas for creating art. It includes tools such as an extensive color palette for both the brush and background, an eraser, size ranges for the brush and eraser, as well as convenient undo, redo, and clear buttons.

![Canvas Interface](./assets/readme/freehand-drawing.gif)

## Functionality & MVPs

### In Canvas, users are able to:
- **Draw Freely:** Utilize a brush tool for freehand drawing.

```js
  startDrawing(e) {
    if (!this.isDrawing) {
      // clear the stacks when a new drawing begins
      this.currentPath = [];
      this.redoStack = [];
      this.isDrawing = true;
    }

    // calculate the adjusted mouse coordinates relative to the canvas
    const canvasMouseX = e.clientX - this.canvasHandler.canvas.offsetLeft;
    const canvasMouseY = e.clientY - this.canvasHandler.canvas.offsetTop;

    // begin a new path in the canvas ctx & move to initial drawing pos
    this.canvasHandler.ctx.beginPath();

    // move the brush to the adjusted mouse coordinates
    this.canvasHandler.ctx.moveTo(canvasMouseX, canvasMouseY);

    // store the starting point in the drawing path
    this.currentPath.push({
      x: canvasMouseX,
      y: canvasMouseY,
      color: this.canvasHandler.colorHandler.currentColor,
      brushSize: this.canvasHandler.brushHandler.currentBrushSize,
    });

    // draw a dot at the starting point
    this.draw(e);
  }

  draw(e) {
    if (!this.isDrawing) return;

    // calculate the adjusted mouse coordinates relative to the canvas
    const mouseX = e.clientX - this.canvasHandler.canvas.offsetLeft;
    const mouseY = e.clientY - this.canvasHandler.canvas.offsetTop;

    // connect the current drawing position to the new position
    this.canvasHandler.ctx.lineTo(mouseX, mouseY);

    // Set brush styling based on whether eraser or brush is checked
    const color = this.canvasHandler.eraseAndClearHandler.eraserCheckbox.checked
      ? this.canvasHandler.colorHandler.bgColor
      : this.canvasHandler.colorHandler.currentColor;

    this.canvasHandler.brushHandler.setBrushStyling(
      color,
      this.canvasHandler.brushHandler.currentBrushSize
    );

    // draw the line on the canvas
    this.canvasHandler.ctx.stroke();

    // store the current point in the drawing path
    this.currentPath.push({
      x: mouseX,
      y: mouseY,
      color: color,
      brushSize: this.canvasHandler.brushHandler.currentBrushSize,
    });
  }

  stopDrawing() {
    if (this.canvasHandler.eraseAndClearHandler.eraserCheckbox.checked)
      this.currentPath.isErase = true;
    if (this.isDrawing) {
      this.canvasHandler.RedoAndUndoHandler.drawnPaths.push(this.currentPath); // if currently drawing, save the current path to the stack (for undo feature)
      this.isDrawing = false;
    }
  }
```

- **Color Selection:** Pick and change colors seamlessly with a color picker.

![Color Selection](./assets/readme/color-selection.gif)

- **Tool Variety:** Choose between brush, eraser, and background (paint bucket) tools.
- **Size Control:** Adjust the size of the brush and eraser using a slider.
- **Undo and Redo:** Easily undo and redo actions for precise editing.

```js
  undo() {
    // if there are paths in the stack,
    if (this.drawnPaths.length > 0) {
      // clear canvas (to prep for redraw)
      this.canvasHandler.ctx.clearRect(
        0,
        0,
        this.canvasHandler.canvas.width,
        this.canvasHandler.canvas.height
      );

      // remove (undo) last drawn path from the stack
      const undonePath = this.drawnPaths.pop();
      // push the undone path to redo stack
      this.redoStack.push(undonePath);

      // redraw all paths that are still in the stack
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }

  redrawPath(path) {
    path.forEach((point, idx) => {
      // if it's the starting point of the path
      if (idx === 0) {
        // move to the starting point
        this.canvasHandler.ctx.beginPath();
        this.canvasHandler.ctx.moveTo(point.x, point.y);
      } else {
        // draw a line to the next point
        this.canvasHandler.ctx.lineTo(point.x, point.y);

        // set brush styling based on point clr & brush size
        if (path.isErase) point.color = this.canvasHandler.colorHandler.bgColor;
        this.canvasHandler.brushHandler.setBrushStyling(
          point.color,
          point.brushSize
        );

        this.canvasHandler.ctx.stroke();
      }
    });
  }

  redo() {
    // if there are paths in the redo stack
    if (this.redoStack.length > 0) {
      // clear canvas (to prep for redraw)
      this.canvasHandler.ctx.clearRect(
        0,
        0,
        this.canvasHandler.canvas.width,
        this.canvasHandler.canvas.height
      );

      // remove (redo) last undone path from the redo stack
      const redonePath = this.redoStack.pop();
      // push the redone path to drawnPaths stack
      this.drawnPaths.push(redonePath);

      // redraw all paths with the correct color
      this.drawnPaths.forEach((path) => this.redrawPath(path));
    }
  }
```

## Additional Features
- **Download Image:** Save your canvas with a download button.
- **Responsive Design:** Ensure a user-friendly experience on various devices.

## Wireframe:

![wireframe](./assets/readme/wireframe.png)

- **Nav Bar:** Displays "Canvas" in HTML headings and links to this project's GitHub repo and my LinkedIn.
- **Canvas Section:** Takes up the majority of the screen for drawing.
- **Bottom Section:** Contains color picker, tool icons, size slider, and undo/ redo/ clear/ download buttons.

## Technologies, Libraries, APIs
Canvas leverages the following technologies:
- The Canvas API to render the canvas and drawing functionality.
- Pickr Library for color picker functionality.
- Webpack to bundle and transpile the source JavaScript code.
- npm to manage project dependencies.

## Implementation Timeline

### Friday Afternoon & Weekend

- Setup project, including getting webpack up and running.
- Create canvas, brush, color classes.
- Render canvas on the screen.
- Implement drawing functionality.
- Add color picker.
- Implement undo and redo features.
- Research and implement canvas clearing.

### Monday

- Implement different brush sizes.
- Research and implement eraser functionality.

### Tuesday

- Create brush and eraser buttons.
- Link slider to both brush and eraser.
- Add download image button.

### Wednesday

- Refine UI appearance.
- Add canvas title.
- Add icons for undo, redo, clear, and download.
- Add navigation links.

### Thursday Morning

- Rewrite this proposal as a production README.

