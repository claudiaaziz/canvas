!function(){"use strict";var t,e,s,r;t=class{constructor(t){this.setupColorHandling(),this.canvasHandler=t}setupColorHandling(){this.currentColor="black",this.colorBtns=document.querySelectorAll(".color-btn"),this.brushColorPicker=document.getElementById("color-picker"),this.colorBtns.forEach((t=>{t.addEventListener("click",(()=>{this.currentColor=t.style.backgroundColor}))})),this.brushColorPicker.addEventListener("input",(()=>{this.currentColor=this.brushColorPicker.value})),this.bgColorPicker=document.getElementById("background-color-picker"),this.bgColorPicker.addEventListener("input",(()=>{const t=this.canvasHandler.drawnPaths,e=this.canvasHandler.redoStack;this.canvasHandler.clear(),this.canvasHandler.drawnPaths=t,this.canvasHandler.redoStack=e,t.forEach((t=>this.canvasHandler.redrawPath(t))),this.canvasHandler.canvas.style.backgroundColor=this.bgColorPicker.value}))}},e=class{constructor(t,e){this.canvasHandler=t,this.canvas=this.canvasHandler.canvas,this.colorHandler=e,this.setupDrawingEventListeners()}setupDrawingEventListeners(){this.canvas.addEventListener("mousedown",(t=>this.startDrawing(t))),this.canvas.addEventListener("mousemove",(t=>this.draw(t))),this.canvas.addEventListener("mouseup",(()=>this.stopDrawing())),this.canvas.addEventListener("mouseout",(()=>this.stopDrawing()))}startDrawing(t){this.isDrawing||(this.currentPath=[],this.redoStack=[],this.isDrawing=!0);const e=t.clientX-this.canvas.offsetLeft,s=t.clientY-this.canvas.offsetTop;this.canvasHandler.ctx.beginPath(),this.canvasHandler.ctx.moveTo(e,s),this.currentPath.push({x:e,y:s,color:this.colorHandler.currentColor,brushSize:this.canvasHandler.currentBrushSize}),this.draw(t)}draw(t){if(!this.isDrawing)return;const e=t.clientX-this.canvas.offsetLeft,s=t.clientY-this.canvas.offsetTop;this.canvasHandler.ctx.lineTo(e,s);const r=this.canvasHandler.eraserCheckbox.checked?this.colorHandler.bgColorPicker.value:this.colorHandler.currentColor;this.canvasHandler.setBrushStyling(r,this.canvasHandler.currentBrushSize),this.canvasHandler.ctx.stroke(),this.currentPath.push({x:e,y:s,color:r,brushSize:this.canvasHandler.currentBrushSize})}stopDrawing(){this.canvasHandler.eraserCheckbox.checked&&(this.currentPath.isErase=!0),this.isDrawing&&(this.canvasHandler.drawnPaths.push(this.currentPath),this.isDrawing=!1)}},s=class{constructor(){this.setupCanvas(),this.setupCanvasProportions(),this.setupBrushSize(),this.setupEraser(),this.setupUndoBtn(),this.setupRedoBtn(),this.setupClearBtn(),this.colorHandler=new t(this),this.drawingHandler=new e(this,this.colorHandler)}setupCanvas(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.isDrawing=!1}setupCanvasProportions(){this.canvas.style.position="absolute",this.canvas.style.top="100px",this.canvas.height=window.innerHeight-100-100,this.canvas.width=window.innerWidth}setupBrushSize(){this.brushSizeInput=document.getElementById("size-slider"),this.brushSizeInput.addEventListener("input",(()=>this.updateBrushSize())),this.currentBrushSize=5}setupClearBtn(){this.clearBtn=document.getElementById("clear"),this.clearBtn.addEventListener("click",(()=>this.clear()))}setupEraser(){this.eraserCheckbox=document.getElementById("eraser")}setupUndoBtn(){this.drawnPaths=[],this.undoBtn=document.getElementById("undo"),this.undoBtn.addEventListener("click",(()=>this.undo()))}setupRedoBtn(){this.redoStack=[],this.redoBtn=document.getElementById("redo"),this.redoBtn.addEventListener("click",(()=>this.redo()))}setBrushStyling(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentColor,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBrushSize;this.ctx.lineCap="round",this.ctx.lineWidth=e,this.ctx.strokeStyle=t}updateBrushSize(){this.currentBrushSize=parseInt(this.brushSizeInput.value),this.setBrushStyling()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.style.backgroundColor="white",this.redoStack=[],this.drawnPaths=[]}undo(){if(this.drawnPaths.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.drawnPaths.pop();this.drawingHandler.redoStack.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}redrawPath(t){t.forEach(((e,s)=>{0===s?(this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y)):(this.ctx.lineTo(e.x,e.y),t.isErase&&(e.color=this.colorHandler.bgColorPicker.value),this.setBrushStyling(e.color,e.brushSize),this.ctx.stroke())}))}redo(){if(this.drawingHandler.redoStack.length>0){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const t=this.drawingHandler.redoStack.pop();this.drawnPaths.push(t),this.drawnPaths.forEach((t=>this.redrawPath(t)))}}},r=class{constructor(){this.brushRadio=document.getElementById("brush"),this.eraserRadio=document.getElementById("eraser"),this.brushLabel=document.querySelector('label[for="brush"]'),this.eraserLabel=document.querySelector('label[for="eraser"]'),this.detectChange(),this.updateIcon()}updateIcon(){this.brushLabel.querySelector("img").src=this.brushRadio.checked?"assets/tab-icon.png":"assets/menu icons/not-active-brush.png",this.eraserLabel.querySelector("img").src=this.eraserRadio.checked?"assets/menu icons/active-eraser.png":"assets/menu icons/not-active-eraser.png"}detectChange(){[this.brushRadio,this.eraserRadio].forEach((t=>{t.addEventListener("change",(()=>this.updateIcon()))}))}},document.addEventListener("DOMContentLoaded",(()=>{new s,new r})),document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("color-picker");Pickr.create({el:t,theme:"classic",default:"#ECD1E2",components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!0,cmyk:!0,input:!0,clear:!0,save:!0}}}).show()}))}();
//# sourceMappingURL=main.js.map