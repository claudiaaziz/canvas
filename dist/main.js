!function(){"use strict";var t;t=class{constructor(){this.setupCanvas(),this.setupCanvasProportions(),this.setupDrawingEventListeners(),this.setupColorHandeling(),this.setupUndoBtn(),this.setupRedoBtn(),this.setupClearBtn()}setupCanvas(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.isDrawing=!1}setupCanvasProportions(){this.canvas.style.position="absolute",this.canvas.style.top="100px",this.canvas.height=window.innerHeight-100-100,this.canvas.width=window.innerWidth}setupDrawingEventListeners(){this.canvas.addEventListener("mousedown",this.startDrawing.bind(this)),this.canvas.addEventListener("mousemove",this.draw.bind(this)),this.canvas.addEventListener("mouseup",this.stopDrawing.bind(this)),this.canvas.addEventListener("mouseout",this.stopDrawing.bind(this))}setupColorHandeling(){this.colorBtns=document.querySelectorAll(".color-btn"),this.brushColorPicker=document.getElementById("color-picker"),this.colorBtns.forEach((t=>{t.addEventListener("click",(()=>{this.currentColor=t.style.backgroundColor}))})),this.brushColorPicker.addEventListener("input",(()=>{this.currentColor=this.brushColorPicker.value})),this.bgColorPicker=document.getElementById("background-color-picker"),this.bgColorPicker.addEventListener("input",(()=>this.canvas.style.backgroundColor=this.bgColorPicker.value))}setupUndoBtn(){this.drawnPaths=[],this.undoBtn=document.getElementById("undo"),this.undoBtn.addEventListener("click",(()=>this.undo()))}setupRedoBtn(){this.redoStack=[],this.redoBtn=document.getElementById("redo"),this.redoBtn.addEventListener("click",(()=>this.redo()))}setupClearBtn(){this.clearBtn=document.getElementById("clear"),this.clearBtn.addEventListener("click",(()=>this.clear()))}startDrawing(t){this.isDrawing||(this.currentPath=[]),this.isDrawing=!0,this.ctx.beginPath();const s=t.clientX-this.canvas.offsetLeft,i=t.clientY-this.canvas.offsetTop;this.ctx.moveTo(s,i)}draw(t){if(!this.isDrawing)return;const s=t.clientX-this.canvas.offsetLeft,i=t.clientY-this.canvas.offsetTop;this.ctx.lineTo(s,i),this.setBrushStyling(),this.ctx.stroke(),this.currentPath.push({x:s,y:i,color:this.currentColor})}stopDrawing(){this.isDrawing&&(this.drawnPaths.push(this.currentPath),this.isDrawing=!1)}setBrushStyling(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentColor;this.ctx.lineCap="round",this.ctx.lineWidth=5,this.ctx.strokeStyle=t}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.style.backgroundColor="white",this.redoStack=[],this.drawnPaths=[]}undo(){if(this.drawnPaths.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.drawnPaths.pop();return this.redoStack.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t))),t}return null}redrawPath(t){let s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.forEach(((t,i)=>{0===i?(this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y)):(this.ctx.lineTo(t.x,t.y),this.setBrushStyling(s?t.color:this.currentColor),this.ctx.stroke())}))}redo(){if(this.redoStack.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.redoStack.pop();return this.drawnPaths.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t))),t}return null}},document.addEventListener("DOMContentLoaded",(()=>{new t}))}();
//# sourceMappingURL=main.js.map