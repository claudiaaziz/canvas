class ToolIcon {
  constructor() {
    this.brushRadio = document.getElementById("brush");
    this.eraserRadio = document.getElementById("eraser");
    this.brushLabel = document.querySelector('label[for="brush"]');
    this.eraserLabel = document.querySelector('label[for="eraser"]');
    this.detectChange();
    this.updateIcon();
  }

  updateIcon() {
    // update brush icon based on whether the brush is checked
    this.brushLabel.querySelector("img").src = this.brushRadio.checked
      ? "assets/tab-icon.png"
      : "assets/menu icons/not-active-brush.png";

    // update eraser icon based on whether the eraser is checked
    this.eraserLabel.querySelector("img").src = this.eraserRadio.checked
      ? "assets/menu icons/active-eraser.png"
      : "assets/menu icons/not-active-eraser.png";
  }

  detectChange() {
    // update icon clr when tool is changed
    [this.brushRadio, this.eraserRadio].forEach((radio) => {
      radio.addEventListener("change", () => this.updateIcon());
    });
  }
}

export default ToolIcon;
