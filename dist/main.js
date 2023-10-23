!function(){"use strict";var t,s,e;t=class{constructor(t){this.setupColorHandling(),this.canvasHandler=t}setupColorHandling(){this.currentColor="black",this.colorBtns=document.querySelectorAll(".color-btn"),this.brushColorPicker=document.getElementById("color-picker"),this.colorBtns.forEach((t=>{t.addEventListener("click",(()=>{this.currentColor=t.style.backgroundColor}))})),this.brushColorPicker.addEventListener("input",(()=>{this.currentColor=this.brushColorPicker.value})),this.bgColorPicker=document.getElementById("background-color-picker"),this.bgColorPicker.addEventListener("input",(()=>{const t=this.canvasHandler.drawnPaths;this.canvasHandler.clear(),t.forEach((t=>this.canvasHandler.redrawPath(t))),this.canvasHandler.canvas.style.backgroundColor=this.bgColorPicker.value}))}},s=class{constructor(){this.setupCanvas(),this.setupCanvasProportions(),this.setupDrawingEventListeners(),this.setupBrushSize(),this.setupEraser(),this.setupUndoBtn(),this.setupRedoBtn(),this.setupClearBtn(),this.colorHandler=new t(this)}setupCanvas(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.isDrawing=!1}setupCanvasProportions(){this.canvas.style.position="absolute",this.canvas.style.top="100px",this.canvas.height=window.innerHeight-100-100,this.canvas.width=window.innerWidth}setupDrawingEventListeners(){this.canvas.addEventListener("mousedown",(t=>this.startDrawing(t))),this.canvas.addEventListener("mousemove",(t=>this.draw(t))),this.canvas.addEventListener("mouseup",(()=>this.stopDrawing())),this.canvas.addEventListener("mouseout",(()=>this.stopDrawing()))}setupBrushSize(){this.brushSizeInput=document.getElementById("size-slider"),this.brushSizeInput.addEventListener("input",(()=>this.updateBrushSize())),this.currentBrushSize=5}setupClearBtn(){this.clearBtn=document.getElementById("clear"),this.clearBtn.addEventListener("click",(()=>this.clear()))}setupEraser(){this.eraserCheckbox=document.getElementById("eraser")}setupUndoBtn(){this.drawnPaths=[],this.undoBtn=document.getElementById("undo"),this.undoBtn.addEventListener("click",(()=>this.undo()))}setupRedoBtn(){this.redoStack=[],this.redoBtn=document.getElementById("redo"),this.redoBtn.addEventListener("click",(()=>this.redo()))}startDrawing(t){this.isDrawing||(this.currentPath=[],this.redoStack=[],this.isDrawing=!0);const s=t.clientX-this.canvas.offsetLeft,e=t.clientY-this.canvas.offsetTop;this.ctx.beginPath(),this.ctx.moveTo(s,e),this.currentPath.push({x:s,y:e,color:this.currentColor,brushSize:this.currentBrushSize}),this.draw(t)}draw(t){if(!this.isDrawing)return;const s=t.clientX-this.canvas.offsetLeft,e=t.clientY-this.canvas.offsetTop;this.ctx.lineTo(s,e);const i=this.eraserCheckbox.checked?this.colorHandler.bgColorPicker.value:this.colorHandler.currentColor;this.setBrushStyling(i,this.currentBrushSize),this.ctx.stroke(),this.currentPath.push({x:s,y:e,color:i,brushSize:this.currentBrushSize})}stopDrawing(){this.eraserCheckbox.checked&&(this.currentPath.isErase=!0),this.isDrawing&&(this.drawnPaths.push(this.currentPath),this.isDrawing=!1)}setBrushStyling(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentColor,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBrushSize;this.ctx.lineCap="round",this.ctx.lineWidth=s,this.ctx.strokeStyle=t}updateBrushSize(){this.currentBrushSize=parseInt(this.brushSizeInput.value),this.setBrushStyling()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.style.backgroundColor="white",this.redoStack=[],this.drawnPaths=[]}undo(){if(this.drawnPaths.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.drawnPaths.pop();this.redoStack.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}redrawPath(t){t.forEach(((s,e)=>{0===e?(this.ctx.beginPath(),this.ctx.moveTo(s.x,s.y)):(this.ctx.lineTo(s.x,s.y),t.isErase&&(s.color=this.colorHandler.bgColorPicker.value),this.setBrushStyling(s.color,s.brushSize),this.ctx.stroke())}))}redo(){if(this.redoStack.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.redoStack.pop();this.drawnPaths.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}},e=class{constructor(){this.brushRadio=document.getElementById("brush"),this.eraserRadio=document.getElementById("eraser"),this.brushLabel=document.querySelector('label[for="brush"]'),this.eraserLabel=document.querySelector('label[for="eraser"]'),this.detectChange(),this.updateIcon()}updateIcon(){this.brushLabel.querySelector("img").src=this.brushRadio.checked?"assets/tab-icon.png":"assets/menu icons/not-active-brush.png",this.eraserLabel.querySelector("img").src=this.eraserRadio.checked?"assets/menu icons/active-eraser.png":"assets/menu icons/not-active-eraser.png"}detectChange(){[this.brushRadio,this.eraserRadio].forEach((t=>{t.addEventListener("change",(()=>this.updateIcon()))}))}},document.addEventListener("DOMContentLoaded",(()=>{new s,new e}))}();
//# sourceMappingURL=main.js.map