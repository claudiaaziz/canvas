/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/brush */ \"./src/scripts/brush.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  new _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXNDO0FBQ0Y7QUFFcENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxJQUFJSCx1REFBTSxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBCcnVzaCBmcm9tIFwiLi9zY3JpcHRzL2JydXNoXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbmV3IENhbnZhcygpO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbIkNhbnZhcyIsIkJydXNoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/brush.js":
/*!******************************!*\
  !*** ./src/scripts/brush.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Brush {\n  // dotted brush, glitter brush?\n  constructor() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brush);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9icnVzaC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1Y7RUFDQUMsV0FBV0EsQ0FBQSxFQUFHLENBRWQ7QUFDRjtBQUVBLCtEQUFlRCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9icnVzaC5qcz9iNGI5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJydXNoIHtcbiAgLy8gZG90dGVkIGJydXNoLCBnbGl0dGVyIGJydXNoP1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcnVzaDtcbiJdLCJuYW1lcyI6WyJCcnVzaCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/brush.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Canvas {\n  constructor() {\n    this.setupCanvas();\n    this.setupCanvasProportions();\n    this.setupDrawingEventListeners();\n    this.setupBrushSize();\n    this.setupColorHandling();\n    this.setupEraser();\n    this.setupUndoBtn();\n    this.setupRedoBtn();\n    this.setupClearBtn();\n  }\n\n  // setting up the canvas\n  setupCanvas() {\n    this.canvas = document.getElementById(\"canvas\");\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.isDrawing = false;\n  }\n  setupCanvasProportions() {\n    const topMargin = 100;\n    const bottomMargin = 100;\n    this.canvas.style.position = \"absolute\";\n    this.canvas.style.top = topMargin + \"px\";\n    this.canvas.height = window.innerHeight - topMargin - bottomMargin;\n    this.canvas.width = window.innerWidth;\n  }\n  setupDrawingEventListeners() {\n    this.canvas.addEventListener(\"mousedown\", e => this.startDrawing(e));\n    this.canvas.addEventListener(\"mousemove\", e => this.draw(e));\n    this.canvas.addEventListener(\"mouseup\", () => this.stopDrawing());\n    this.canvas.addEventListener(\"mouseout\", () => this.stopDrawing());\n  }\n  setupBrushSize() {\n    this.brushSizeInput = document.getElementById(\"size-slider\");\n    this.brushSizeInput.addEventListener(\"input\", () => this.updateBrushSize());\n    this.currentBrushSize = 5;\n  }\n  setupColorHandling() {\n    // if a brush color has been selected..\n    this.colorBtns = document.querySelectorAll(\".color-btn\");\n    this.brushColorPicker = document.getElementById(\"color-picker\");\n    this.colorBtns.forEach(colorbtn => {\n      colorbtn.addEventListener(\"click\", () => {\n        this.currentColor = colorbtn.style.backgroundColor;\n      });\n    });\n    this.brushColorPicker.addEventListener(\"input\", () => {\n      this.currentColor = this.brushColorPicker.value;\n    });\n\n    // if a bg color has been selected..\n    this.bgColorPicker = document.getElementById(\"background-color-picker\");\n    this.bgColorPicker.addEventListener(\"input\", () => this.canvas.style.backgroundColor = this.bgColorPicker.value);\n  }\n  setupClearBtn() {\n    this.clearBtn = document.getElementById(\"clear\");\n    this.clearBtn.addEventListener(\"click\", () => this.clear());\n  }\n  setupEraser() {\n    this.eraserCheckbox = document.getElementById(\"eraser\");\n    this.eraserCheckbox.addEventListener(\"change\", () => this.erase());\n  }\n  setupUndoBtn() {\n    this.drawnPaths = [];\n    this.undoBtn = document.getElementById(\"undo\");\n    this.undoBtn.addEventListener(\"click\", () => this.undo());\n  }\n  setupRedoBtn() {\n    this.redoStack = [];\n    this.redoBtn = document.getElementById(\"redo\");\n    this.redoBtn.addEventListener(\"click\", () => this.redo());\n  }\n\n  // // drawing actions\n  startDrawing(e) {\n    if (!this.isDrawing) {\n      // clear the stacks when a new drawing begins\n      this.currentPath = [];\n      this.redoStack = [];\n      this.isDrawing = true;\n    }\n\n    // calculate the adjusted mouse coordinates relative to the canvas\n    const canvasMouseX = e.clientX - this.canvas.offsetLeft;\n    const canvasMouseY = e.clientY - this.canvas.offsetTop;\n\n    // begin a new path in the canvas ctx & move to initial drawing pos\n    this.ctx.beginPath();\n\n    // move the brush to the adjusted mouse coordinates\n    this.ctx.moveTo(canvasMouseX, canvasMouseY);\n\n    // store the starting point in the drawing path\n    this.currentPath.push({\n      x: canvasMouseX,\n      y: canvasMouseY,\n      color: this.currentColor,\n      brushSize: this.currentBrushSize\n    });\n\n    // draw a dot at the starting point\n    this.draw(e);\n  }\n  draw(e) {\n    if (!this.isDrawing) return;\n\n    // calculate the adjusted mouse coordinates relative to the canvas\n    const mouseX = e.clientX - this.canvas.offsetLeft;\n    const mouseY = e.clientY - this.canvas.offsetTop;\n\n    // connect the current drawing position to the new position\n    this.ctx.lineTo(mouseX, mouseY);\n\n    // Set brush styling based on whether eraser is active\n    const eraserColor = this.eraserCheckbox.checked ? this.bgColorPicker.value : this.currentColor;\n    this.setBrushStyling(eraserColor, this.currentBrushSize);\n\n    // draw the line on the canvas\n    this.ctx.stroke();\n\n    // store the current point in the drawing path\n    this.currentPath.push({\n      x: mouseX,\n      y: mouseY,\n      color: eraserColor,\n      brushSize: this.currentBrushSize\n    });\n  }\n  stopDrawing() {\n    if (this.isDrawing) {\n      this.drawnPaths.push(this.currentPath); // if currently drawing, save the current path to the stack (for undo feature)\n      this.isDrawing = false;\n    }\n  }\n  setBrushStyling() {\n    let color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentColor;\n    let brushSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentBrushSize;\n    this.ctx.lineCap = \"round\";\n    this.ctx.lineWidth = brushSize;\n    this.ctx.strokeStyle = color;\n  }\n  updateBrushSize() {\n    this.currentBrushSize = parseInt(this.brushSizeInput.value);\n    this.setBrushStyling();\n  }\n\n  // btn actions\n  clear() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.canvas.style.backgroundColor = \"white\";\n    this.redoStack = [];\n    this.drawnPaths = [];\n  }\n  erase() {\n    if (this.eraserCheckbox.checked) {\n      // If eraser is selected, set color to background\n      this.currentColor = this.bgColorPicker.value;\n    }\n  }\n  undo() {\n    // if there are paths in the stack\n    if (this.drawnPaths.length > 0) {\n      // clear canvas (to prep for redraw)\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n      // remove (undo) last drawn path from the stack\n      const undonePath = this.drawnPaths.pop();\n      // push the undone path to redo stack\n      this.redoStack.push(undonePath);\n\n      // redraw all paths that are still in the stack with the correct color\n      this.drawnPaths.forEach(path => this.redrawPath(path));\n    }\n  }\n  redrawPath(path) {\n    let isUndo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    path.forEach((point, idx) => {\n      // if it's the starting point of the path\n      if (idx === 0) {\n        // move to the starting point\n        this.ctx.beginPath();\n        this.ctx.moveTo(point.x, point.y);\n      } else {\n        // draw a line to the next point\n        this.ctx.lineTo(point.x, point.y);\n\n        // set brush styling color based on whether it's an undo or not\n        this.setBrushStyling(isUndo ? point.color : this.currentColor, point.brushSize);\n        this.ctx.stroke();\n      }\n    });\n  }\n  redo() {\n    // if there are paths in the redo stack\n    if (this.redoStack.length > 0) {\n      // clear canvas (to prep for redraw)\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n      // remove (redo) last undone path from the redo stack\n      const redonePath = this.redoStack.pop();\n\n      // push the redone path to drawnPaths stack\n      this.drawnPaths.push(redonePath);\n\n      // redraw all paths with the correct color\n      this.drawnPaths.forEach(path => this.redrawPath(path));\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7O1FBRWpDO1FBQ0EsSUFBSSxDQUFDUSxlQUFlLENBQ2xCYyxNQUFNLEdBQUdDLEtBQUssQ0FBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMxQixZQUFZLEVBQ3hDZ0QsS0FBSyxDQUFDckIsU0FDUixDQUFDO1FBRUQsSUFBSSxDQUFDckQsR0FBRyxDQUFDNEQsTUFBTSxDQUFDLENBQUM7TUFDbkI7SUFDRixDQUFDLENBQUM7RUFDSjtFQUVBckIsSUFBSUEsQ0FBQSxFQUFHO0lBQ0w7SUFDQSxJQUFJLElBQUksQ0FBQ0YsU0FBUyxDQUFDeUIsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUM3QjtNQUNBLElBQUksQ0FBQzlELEdBQUcsQ0FBQ29FLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ3ZFLE1BQU0sQ0FBQ2MsS0FBSyxFQUFFLElBQUksQ0FBQ2QsTUFBTSxDQUFDVyxNQUFNLENBQUM7O01BRS9EO01BQ0EsTUFBTW9FLFVBQVUsR0FBRyxJQUFJLENBQUN2QyxTQUFTLENBQUNpQyxHQUFHLENBQUMsQ0FBQzs7TUFFdkM7TUFDQSxJQUFJLENBQUNwQyxVQUFVLENBQUNlLElBQUksQ0FBQzJCLFVBQVUsQ0FBQzs7TUFFaEM7TUFDQSxJQUFJLENBQUMxQyxVQUFVLENBQUNWLE9BQU8sQ0FBRStDLElBQUksSUFBSyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7SUFDMUQ7RUFDRjtBQUNGO0FBRUEsK0RBQWVyRixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9jYW52YXMuanM/N2JkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldHVwQ2FudmFzKCk7XG4gICAgdGhpcy5zZXR1cENhbnZhc1Byb3BvcnRpb25zKCk7XG4gICAgdGhpcy5zZXR1cERyYXdpbmdFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0dXBCcnVzaFNpemUoKTtcbiAgICB0aGlzLnNldHVwQ29sb3JIYW5kbGluZygpO1xuICAgIHRoaXMuc2V0dXBFcmFzZXIoKTtcbiAgICB0aGlzLnNldHVwVW5kb0J0bigpO1xuICAgIHRoaXMuc2V0dXBSZWRvQnRuKCk7XG4gICAgdGhpcy5zZXR1cENsZWFyQnRuKCk7XG4gIH1cblxuICAvLyBzZXR0aW5nIHVwIHRoZSBjYW52YXNcbiAgc2V0dXBDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmlzRHJhd2luZyA9IGZhbHNlO1xuICB9XG5cbiAgc2V0dXBDYW52YXNQcm9wb3J0aW9ucygpIHtcbiAgICBjb25zdCB0b3BNYXJnaW4gPSAxMDA7XG4gICAgY29uc3QgYm90dG9tTWFyZ2luID0gMTAwO1xuXG4gICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gdG9wTWFyZ2luICsgXCJweFwiO1xuXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdG9wTWFyZ2luIC0gYm90dG9tTWFyZ2luO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBzZXR1cERyYXdpbmdFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLnN0YXJ0RHJhd2luZyhlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4gdGhpcy5kcmF3KGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB0aGlzLnN0b3BEcmF3aW5nKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLnN0b3BEcmF3aW5nKCkpO1xuICB9XG5cbiAgc2V0dXBCcnVzaFNpemUoKSB7XG4gICAgdGhpcy5icnVzaFNpemVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l6ZS1zbGlkZXJcIik7XG4gICAgdGhpcy5icnVzaFNpemVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4gdGhpcy51cGRhdGVCcnVzaFNpemUoKSk7XG4gICAgdGhpcy5jdXJyZW50QnJ1c2hTaXplID0gNTtcbiAgfVxuXG4gIHNldHVwQ29sb3JIYW5kbGluZygpIHtcbiAgICAvLyBpZiBhIGJydXNoIGNvbG9yIGhhcyBiZWVuIHNlbGVjdGVkLi5cbiAgICB0aGlzLmNvbG9yQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItYnRuXCIpO1xuICAgIHRoaXMuYnJ1c2hDb2xvclBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3ItcGlja2VyXCIpO1xuXG4gICAgdGhpcy5jb2xvckJ0bnMuZm9yRWFjaCgoY29sb3JidG4pID0+IHtcbiAgICAgIGNvbG9yYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbG9yID0gY29sb3JidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJydXNoQ29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudENvbG9yID0gdGhpcy5icnVzaENvbG9yUGlja2VyLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgYSBiZyBjb2xvciBoYXMgYmVlbiBzZWxlY3RlZC4uXG4gICAgdGhpcy5iZ0NvbG9yUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWNvbG9yLXBpY2tlclwiKTtcbiAgICB0aGlzLmJnQ29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgICgpID0+ICh0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJnQ29sb3JQaWNrZXIudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHNldHVwQ2xlYXJCdG4oKSB7XG4gICAgdGhpcy5jbGVhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXJcIik7XG4gICAgdGhpcy5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbGVhcigpKTtcbiAgfVxuXG4gIHNldHVwRXJhc2VyKCkge1xuICAgIHRoaXMuZXJhc2VyQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVyYXNlclwiKTtcbiAgICB0aGlzLmVyYXNlckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gdGhpcy5lcmFzZSgpKTtcbiAgfVxuXG4gIHNldHVwVW5kb0J0bigpIHtcbiAgICB0aGlzLmRyYXduUGF0aHMgPSBbXTtcbiAgICB0aGlzLnVuZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuZG9cIik7XG4gICAgdGhpcy51bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnVuZG8oKSk7XG4gIH1cblxuICBzZXR1cFJlZG9CdG4oKSB7XG4gICAgdGhpcy5yZWRvU3RhY2sgPSBbXTtcbiAgICB0aGlzLnJlZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZG9cIik7XG4gICAgdGhpcy5yZWRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlZG8oKSk7XG4gIH1cblxuICAvLyAvLyBkcmF3aW5nIGFjdGlvbnNcbiAgc3RhcnREcmF3aW5nKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNEcmF3aW5nKSB7XG4gICAgICAvLyBjbGVhciB0aGUgc3RhY2tzIHdoZW4gYSBuZXcgZHJhd2luZyBiZWdpbnNcbiAgICAgIHRoaXMuY3VycmVudFBhdGggPSBbXTtcbiAgICAgIHRoaXMucmVkb1N0YWNrID0gW107XG4gICAgICB0aGlzLmlzRHJhd2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBhZGp1c3RlZCBtb3VzZSBjb29yZGluYXRlcyByZWxhdGl2ZSB0byB0aGUgY2FudmFzXG4gICAgY29uc3QgY2FudmFzTW91c2VYID0gZS5jbGllbnRYIC0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdDtcbiAgICBjb25zdCBjYW52YXNNb3VzZVkgPSBlLmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3A7XG5cbiAgICAvLyBiZWdpbiBhIG5ldyBwYXRoIGluIHRoZSBjYW52YXMgY3R4ICYgbW92ZSB0byBpbml0aWFsIGRyYXdpbmcgcG9zXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICAvLyBtb3ZlIHRoZSBicnVzaCB0byB0aGUgYWRqdXN0ZWQgbW91c2UgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmN0eC5tb3ZlVG8oY2FudmFzTW91c2VYLCBjYW52YXNNb3VzZVkpO1xuXG4gICAgLy8gc3RvcmUgdGhlIHN0YXJ0aW5nIHBvaW50IGluIHRoZSBkcmF3aW5nIHBhdGhcbiAgICB0aGlzLmN1cnJlbnRQYXRoLnB1c2goe1xuICAgICAgeDogY2FudmFzTW91c2VYLFxuICAgICAgeTogY2FudmFzTW91c2VZLFxuICAgICAgY29sb3I6IHRoaXMuY3VycmVudENvbG9yLFxuICAgICAgYnJ1c2hTaXplOiB0aGlzLmN1cnJlbnRCcnVzaFNpemUsXG4gICAgfSk7XG5cbiAgICAvLyBkcmF3IGEgZG90IGF0IHRoZSBzdGFydGluZyBwb2ludFxuICAgIHRoaXMuZHJhdyhlKTtcbiAgfVxuXG4gIGRyYXcoZSkge1xuICAgIGlmICghdGhpcy5pc0RyYXdpbmcpIHJldHVybjtcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgYWRqdXN0ZWQgbW91c2UgY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gdGhlIGNhbnZhc1xuICAgIGNvbnN0IG1vdXNlWCA9IGUuY2xpZW50WCAtIHRoaXMuY2FudmFzLm9mZnNldExlZnQ7XG4gICAgY29uc3QgbW91c2VZID0gZS5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wO1xuXG4gICAgLy8gY29ubmVjdCB0aGUgY3VycmVudCBkcmF3aW5nIHBvc2l0aW9uIHRvIHRoZSBuZXcgcG9zaXRpb25cbiAgICB0aGlzLmN0eC5saW5lVG8obW91c2VYLCBtb3VzZVkpO1xuXG4gICAgLy8gU2V0IGJydXNoIHN0eWxpbmcgYmFzZWQgb24gd2hldGhlciBlcmFzZXIgaXMgYWN0aXZlXG4gICAgY29uc3QgZXJhc2VyQ29sb3IgPSB0aGlzLmVyYXNlckNoZWNrYm94LmNoZWNrZWRcbiAgICAgID8gdGhpcy5iZ0NvbG9yUGlja2VyLnZhbHVlXG4gICAgICA6IHRoaXMuY3VycmVudENvbG9yO1xuXG4gICAgdGhpcy5zZXRCcnVzaFN0eWxpbmcoZXJhc2VyQ29sb3IsIHRoaXMuY3VycmVudEJydXNoU2l6ZSk7XG5cbiAgICAvLyBkcmF3IHRoZSBsaW5lIG9uIHRoZSBjYW52YXNcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIC8vIHN0b3JlIHRoZSBjdXJyZW50IHBvaW50IGluIHRoZSBkcmF3aW5nIHBhdGhcbiAgICB0aGlzLmN1cnJlbnRQYXRoLnB1c2goe1xuICAgICAgeDogbW91c2VYLFxuICAgICAgeTogbW91c2VZLFxuICAgICAgY29sb3I6IGVyYXNlckNvbG9yLFxuICAgICAgYnJ1c2hTaXplOiB0aGlzLmN1cnJlbnRCcnVzaFNpemUsXG4gICAgfSk7XG4gIH1cblxuICBzdG9wRHJhd2luZygpIHtcbiAgICBpZiAodGhpcy5pc0RyYXdpbmcpIHtcbiAgICAgIHRoaXMuZHJhd25QYXRocy5wdXNoKHRoaXMuY3VycmVudFBhdGgpOyAvLyBpZiBjdXJyZW50bHkgZHJhd2luZywgc2F2ZSB0aGUgY3VycmVudCBwYXRoIHRvIHRoZSBzdGFjayAoZm9yIHVuZG8gZmVhdHVyZSlcbiAgICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2V0QnJ1c2hTdHlsaW5nKFxuICAgIGNvbG9yID0gdGhpcy5jdXJyZW50Q29sb3IsXG4gICAgYnJ1c2hTaXplID0gdGhpcy5jdXJyZW50QnJ1c2hTaXplXG4gICkge1xuICAgIHRoaXMuY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gYnJ1c2hTaXplO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIH1cblxuICB1cGRhdGVCcnVzaFNpemUoKSB7XG4gICAgdGhpcy5jdXJyZW50QnJ1c2hTaXplID0gcGFyc2VJbnQodGhpcy5icnVzaFNpemVJbnB1dC52YWx1ZSk7XG4gICAgdGhpcy5zZXRCcnVzaFN0eWxpbmcoKTtcbiAgfVxuXG4gIC8vIGJ0biBhY3Rpb25zXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5yZWRvU3RhY2sgPSBbXTtcbiAgICB0aGlzLmRyYXduUGF0aHMgPSBbXTtcbiAgfVxuXG4gIGVyYXNlKCkge1xuICAgIGlmICh0aGlzLmVyYXNlckNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIC8vIElmIGVyYXNlciBpcyBzZWxlY3RlZCwgc2V0IGNvbG9yIHRvIGJhY2tncm91bmRcbiAgICAgIHRoaXMuY3VycmVudENvbG9yID0gdGhpcy5iZ0NvbG9yUGlja2VyLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVuZG8oKSB7XG4gICAgLy8gaWYgdGhlcmUgYXJlIHBhdGhzIGluIHRoZSBzdGFja1xuICAgIGlmICh0aGlzLmRyYXduUGF0aHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gY2xlYXIgY2FudmFzICh0byBwcmVwIGZvciByZWRyYXcpXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIC8vIHJlbW92ZSAodW5kbykgbGFzdCBkcmF3biBwYXRoIGZyb20gdGhlIHN0YWNrXG4gICAgICBjb25zdCB1bmRvbmVQYXRoID0gdGhpcy5kcmF3blBhdGhzLnBvcCgpO1xuICAgICAgLy8gcHVzaCB0aGUgdW5kb25lIHBhdGggdG8gcmVkbyBzdGFja1xuICAgICAgdGhpcy5yZWRvU3RhY2sucHVzaCh1bmRvbmVQYXRoKTtcblxuICAgICAgLy8gcmVkcmF3IGFsbCBwYXRocyB0aGF0IGFyZSBzdGlsbCBpbiB0aGUgc3RhY2sgd2l0aCB0aGUgY29ycmVjdCBjb2xvclxuICAgICAgdGhpcy5kcmF3blBhdGhzLmZvckVhY2goKHBhdGgpID0+IHRoaXMucmVkcmF3UGF0aChwYXRoKSk7XG4gICAgfVxuICB9XG5cbiAgcmVkcmF3UGF0aChwYXRoLCBpc1VuZG8gPSB0cnVlKSB7XG4gICAgcGF0aC5mb3JFYWNoKChwb2ludCwgaWR4KSA9PiB7XG4gICAgICAvLyBpZiBpdCdzIHRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgcGF0aFxuICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICAvLyBtb3ZlIHRvIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZHJhdyBhIGxpbmUgdG8gdGhlIG5leHQgcG9pbnRcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuXG4gICAgICAgIC8vIHNldCBicnVzaCBzdHlsaW5nIGNvbG9yIGJhc2VkIG9uIHdoZXRoZXIgaXQncyBhbiB1bmRvIG9yIG5vdFxuICAgICAgICB0aGlzLnNldEJydXNoU3R5bGluZyhcbiAgICAgICAgICBpc1VuZG8gPyBwb2ludC5jb2xvciA6IHRoaXMuY3VycmVudENvbG9yLFxuICAgICAgICAgIHBvaW50LmJydXNoU2l6ZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVkbygpIHtcbiAgICAvLyBpZiB0aGVyZSBhcmUgcGF0aHMgaW4gdGhlIHJlZG8gc3RhY2tcbiAgICBpZiAodGhpcy5yZWRvU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgLy8gY2xlYXIgY2FudmFzICh0byBwcmVwIGZvciByZWRyYXcpXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIC8vIHJlbW92ZSAocmVkbykgbGFzdCB1bmRvbmUgcGF0aCBmcm9tIHRoZSByZWRvIHN0YWNrXG4gICAgICBjb25zdCByZWRvbmVQYXRoID0gdGhpcy5yZWRvU3RhY2sucG9wKCk7XG5cbiAgICAgIC8vIHB1c2ggdGhlIHJlZG9uZSBwYXRoIHRvIGRyYXduUGF0aHMgc3RhY2tcbiAgICAgIHRoaXMuZHJhd25QYXRocy5wdXNoKHJlZG9uZVBhdGgpO1xuXG4gICAgICAvLyByZWRyYXcgYWxsIHBhdGhzIHdpdGggdGhlIGNvcnJlY3QgY29sb3JcbiAgICAgIHRoaXMuZHJhd25QYXRocy5mb3JFYWNoKChwYXRoKSA9PiB0aGlzLnJlZHJhd1BhdGgocGF0aCkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG4iXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJzZXR1cENhbnZhcyIsInNldHVwQ2FudmFzUHJvcG9ydGlvbnMiLCJzZXR1cERyYXdpbmdFdmVudExpc3RlbmVycyIsInNldHVwQnJ1c2hTaXplIiwic2V0dXBDb2xvckhhbmRsaW5nIiwic2V0dXBFcmFzZXIiLCJzZXR1cFVuZG9CdG4iLCJzZXR1cFJlZG9CdG4iLCJzZXR1cENsZWFyQnRuIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJpc0RyYXdpbmciLCJ0b3BNYXJnaW4iLCJib3R0b21NYXJnaW4iLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0YXJ0RHJhd2luZyIsImRyYXciLCJzdG9wRHJhd2luZyIsImJydXNoU2l6ZUlucHV0IiwidXBkYXRlQnJ1c2hTaXplIiwiY3VycmVudEJydXNoU2l6ZSIsImNvbG9yQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJicnVzaENvbG9yUGlja2VyIiwiZm9yRWFjaCIsImNvbG9yYnRuIiwiY3VycmVudENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJiZ0NvbG9yUGlja2VyIiwiY2xlYXJCdG4iLCJjbGVhciIsImVyYXNlckNoZWNrYm94IiwiZXJhc2UiLCJkcmF3blBhdGhzIiwidW5kb0J0biIsInVuZG8iLCJyZWRvU3RhY2siLCJyZWRvQnRuIiwicmVkbyIsImN1cnJlbnRQYXRoIiwiY2FudmFzTW91c2VYIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJjYW52YXNNb3VzZVkiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwicHVzaCIsIngiLCJ5IiwiY29sb3IiLCJicnVzaFNpemUiLCJtb3VzZVgiLCJtb3VzZVkiLCJsaW5lVG8iLCJlcmFzZXJDb2xvciIsImNoZWNrZWQiLCJzZXRCcnVzaFN0eWxpbmciLCJzdHJva2UiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJsaW5lQ2FwIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJwYXJzZUludCIsImNsZWFyUmVjdCIsInVuZG9uZVBhdGgiLCJwb3AiLCJwYXRoIiwicmVkcmF3UGF0aCIsImlzVW5kbyIsInBvaW50IiwiaWR4IiwicmVkb25lUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMtcHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;