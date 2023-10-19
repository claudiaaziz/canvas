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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  new _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0M7QUFFdENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxJQUFJRix1REFBTSxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBuZXcgQ2FudmFzKCk7XG59KTtcblxuXG4iXSwibmFtZXMiOlsiQ2FudmFzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Canvas {\n  constructor() {\n    this.canvas = document.getElementById(\"canvas\");\n    this.setupCanvas();\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.isDrawing = false;\n    this.canvas.addEventListener(\"mousedown\", this.startDrawing.bind(this));\n    this.canvas.addEventListener(\"mousemove\", this.draw.bind(this));\n    this.canvas.addEventListener(\"mouseup\", this.stopDrawing.bind(this));\n    this.canvas.addEventListener(\"mouseout\", this.stopDrawing.bind(this));\n  }\n  setupCanvas() {\n    const topMargin = 100;\n    const bottomMargin = 100;\n    this.canvas.style.position = \"absolute\";\n    this.canvas.style.top = topMargin + \"px\";\n    this.canvas.height = window.innerHeight - topMargin - bottomMargin;\n    this.canvas.width = window.innerWidth;\n  }\n  startDrawing(e) {\n    this.isDrawing = true;\n    this.ctx.beginPath();\n    this.ctx.moveTo(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);\n    this.draw(e);\n  }\n  draw(e) {\n    if (!this.isDrawing) return;\n    this.ctx.lineTo(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);\n    this.ctx.stroke();\n  }\n  stopDrawing() {\n    this.isDrawing = false;\n  }\n\n  // clear() {\n\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNYQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBRS9DLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSSxDQUFDSixNQUFNLENBQUNLLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDdkMsSUFBSSxDQUFDQyxTQUFTLEdBQUcsS0FBSztJQUV0QixJQUFJLENBQUNOLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkUsSUFBSSxDQUFDVCxNQUFNLENBQUNPLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNHLElBQUksQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELElBQUksQ0FBQ1QsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDSSxXQUFXLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxJQUFJLENBQUNULE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ0ksV0FBVyxDQUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkU7RUFFQU4sV0FBV0EsQ0FBQSxFQUFHO0lBQ1osTUFBTVMsU0FBUyxHQUFHLEdBQUc7SUFDckIsTUFBTUMsWUFBWSxHQUFHLEdBQUc7SUFFeEIsSUFBSSxDQUFDYixNQUFNLENBQUNjLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFVBQVU7SUFDdkMsSUFBSSxDQUFDZixNQUFNLENBQUNjLEtBQUssQ0FBQ0UsR0FBRyxHQUFHSixTQUFTLEdBQUcsSUFBSTtJQUV4QyxJQUFJLENBQUNaLE1BQU0sQ0FBQ2lCLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUdQLFNBQVMsR0FBR0MsWUFBWTtJQUNsRSxJQUFJLENBQUNiLE1BQU0sQ0FBQ29CLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxVQUFVO0VBQ3ZDO0VBRUFiLFlBQVlBLENBQUNjLENBQUMsRUFBRTtJQUNkLElBQUksQ0FBQ2hCLFNBQVMsR0FBRyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0YsR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDbkIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDRixDQUFDLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUN6QixNQUFNLENBQUMwQixVQUFVLEVBQUVKLENBQUMsQ0FBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQzNCLE1BQU0sQ0FBQzRCLFNBQVMsQ0FBQztJQUN0RixJQUFJLENBQUNsQixJQUFJLENBQUNZLENBQUMsQ0FBQztFQUNkO0VBRUFaLElBQUlBLENBQUNZLENBQUMsRUFBRTtJQUNOLElBQUksQ0FBQyxJQUFJLENBQUNoQixTQUFTLEVBQUU7SUFDckIsSUFBSSxDQUFDRixHQUFHLENBQUN5QixNQUFNLENBQUNQLENBQUMsQ0FBQ0csT0FBTyxHQUFHLElBQUksQ0FBQ3pCLE1BQU0sQ0FBQzBCLFVBQVUsRUFBRUosQ0FBQyxDQUFDSyxPQUFPLEdBQUcsSUFBSSxDQUFDM0IsTUFBTSxDQUFDNEIsU0FBUyxDQUFDO0lBQ3RGLElBQUksQ0FBQ3hCLEdBQUcsQ0FBQzBCLE1BQU0sQ0FBQyxDQUFDO0VBQ25CO0VBRUFuQixXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNMLFNBQVMsR0FBRyxLQUFLO0VBQ3hCOztFQUVBOztFQUVBO0FBQ0Y7O0FBRUEsK0RBQWVSLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcz83YmRlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5cbiAgICB0aGlzLnNldHVwQ2FudmFzKCk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5zdGFydERyYXdpbmcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5zdG9wRHJhd2luZy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5zdG9wRHJhd2luZy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNldHVwQ2FudmFzKCkge1xuICAgIGNvbnN0IHRvcE1hcmdpbiA9IDEwMDtcbiAgICBjb25zdCBib3R0b21NYXJnaW4gPSAxMDA7XG5cbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSB0b3BNYXJnaW4gKyBcInB4XCI7XG5cbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0b3BNYXJnaW4gLSBib3R0b21NYXJnaW47XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIHN0YXJ0RHJhd2luZyhlKSB7XG4gICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhlLmNsaWVudFggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0LCBlLmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApO1xuICAgIHRoaXMuZHJhdyhlKVxuICB9XG5cbiAgZHJhdyhlKSB7XG4gICAgaWYgKCF0aGlzLmlzRHJhd2luZykgcmV0dXJuO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhlLmNsaWVudFggLSB0aGlzLmNhbnZhcy5vZmZzZXRMZWZ0LCBlLmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpXG4gIH1cblxuICBzdG9wRHJhd2luZygpIHtcbiAgICB0aGlzLmlzRHJhd2luZyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gY2xlYXIoKSB7XG5cbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG4iXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0dXBDYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaXNEcmF3aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0RHJhd2luZyIsImJpbmQiLCJkcmF3Iiwic3RvcERyYXdpbmciLCJ0b3BNYXJnaW4iLCJib3R0b21NYXJnaW4iLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwibGluZVRvIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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