class DownloadHandler {
  constructor(canvasHandler) {
    this.canvasHandler = canvasHandler;
    this.setupDownloadBtn()
  }

  setupDownloadBtn() {
    this.downloadBtn = document.getElementById("download");
    this.downloadBtn.addEventListener("click", () => this.download());
  }

  download() {
    // create a temp canvas to preserve the background (wo this the bg would be transparent)
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = this.canvasHandler.canvas.width;
    tempCanvas.height = this.canvasHandler.canvas.height;

    // set the background color on the temp canvas
    tempCtx.fillStyle = this.canvasHandler.canvas.style.backgroundColor;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // draw the existing canvas content on top of the background
    tempCtx.drawImage(this.canvasHandler.canvas, 0, 0);

    // get the data URL of the temp canvas
    const dataUrl = tempCanvas.toDataURL("image/png");

    // create a link ele for download
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "canvas.png";

    // trigger the download
    link.click();
  }
}

export default DownloadHandler;