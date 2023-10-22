!function(){"use strict";var t;t=class{constructor(){this.setupCanvas(),this.setupCanvasProportions(),this.setupDrawingEventListeners(),this.setupBrushSize(),this.setupColorHandling(),this.setupUndoBtn(),this.setupRedoBtn(),this.setupClearBtn()}setupCanvas(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.isDrawing=!1}setupCanvasProportions(){this.canvas.style.position="absolute",this.canvas.style.top="100px",this.canvas.height=window.innerHeight-100-100,this.canvas.width=window.innerWidth}setupDrawingEventListeners(){this.canvas.addEventListener("mousedown",(t=>this.startDrawing(t))),this.canvas.addEventListener("mousemove",(t=>this.draw(t))),this.canvas.addEventListener("mouseup",(()=>this.stopDrawing())),this.canvas.addEventListener("mouseout",(()=>this.stopDrawing()))}setupBrushSize(){this.brushSizeInput=document.getElementById("brush-size"),this.brushSizeInput.addEventListener("input",(()=>this.updateBrushSize())),this.currentBrushSize=5}setupColorHandling(){this.colorBtns=document.querySelectorAll(".color-btn"),this.brushColorPicker=document.getElementById("color-picker"),this.colorBtns.forEach((t=>{t.addEventListener("click",(()=>{this.currentColor=t.style.backgroundColor}))})),this.brushColorPicker.addEventListener("input",(()=>{this.currentColor=this.brushColorPicker.value})),this.bgColorPicker=document.getElementById("background-color-picker"),this.bgColorPicker.addEventListener("input",(()=>this.canvas.style.backgroundColor=this.bgColorPicker.value))}setupUndoBtn(){this.drawnPaths=[],this.undoBtn=document.getElementById("undo"),this.undoBtn.addEventListener("click",(()=>this.undo()))}setupRedoBtn(){this.redoStack=[],this.redoBtn=document.getElementById("redo"),this.redoBtn.addEventListener("click",(()=>this.redo()))}setupClearBtn(){this.clearBtn=document.getElementById("clear"),this.clearBtn.addEventListener("click",(()=>this.clear()))}startDrawing(t){this.isDrawing||(this.currentPath=[],this.redoStack=[],this.isDrawing=!0);const s=t.clientX-this.canvas.offsetLeft,e=t.clientY-this.canvas.offsetTop;this.ctx.beginPath(),this.ctx.moveTo(s,e),this.currentPath.push({x:s,y:e,color:this.currentColor,brushSize:this.currentBrushSize}),this.draw(t)}draw(t){if(!this.isDrawing)return;const s=t.clientX-this.canvas.offsetLeft,e=t.clientY-this.canvas.offsetTop;this.ctx.lineTo(s,e),this.setBrushStyling(),this.ctx.stroke(),this.currentPath.push({x:s,y:e,color:this.currentColor,brushSize:this.currentBrushSize})}stopDrawing(){this.isDrawing&&(this.drawnPaths.push(this.currentPath),this.isDrawing=!1)}setBrushStyling(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentColor,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBrushSize;this.ctx.lineCap="round",this.ctx.lineWidth=s,this.ctx.strokeStyle=t}updateBrushSize(){this.currentBrushSize=parseInt(this.brushSizeInput.value),this.setBrushStyling()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.style.backgroundColor="white",this.redoStack=[],this.drawnPaths=[]}undo(){if(this.drawnPaths.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.drawnPaths.pop();this.redoStack.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}redrawPath(t){let s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.forEach(((t,e)=>{0===e?(this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y)):(this.ctx.lineTo(t.x,t.y),this.setBrushStyling(s?t.color:this.currentColor,t.brushSize),this.ctx.stroke())}))}redo(){if(this.redoStack.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.redoStack.pop();this.drawnPaths.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}},document.addEventListener("DOMContentLoaded",(()=>{new t}))}();
//# sourceMappingURL=main.js.map