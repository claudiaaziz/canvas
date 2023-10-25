class ToolIcon {
  constructor() {
    this.brushRadio = document.getElementById("brush");
    this.eraserRadio = document.getElementById("eraser");
    this.bgColorRadio = document.getElementById("background-color-pickr");
    this.brushLabel = document.querySelector('label[for="brush"]');
    this.eraserLabel = document.querySelector('label[for="eraser"]');
    this.bgColorLabel = document.querySelector(
      'label[for="background-color-pickr"]'
    );
    this.detectChange();
    this.updateIcon();
  }

  updateIcon() {
    // update brush icon based on whether the brush is checked
    this.brushLabel.querySelector("img").src = this.brushRadio.checked
      ? "assets/tab-icon.png"
      : "assets/menu icons/inactive-brush.png";

    // update eraser icon based on whether the eraser is checked
    this.eraserLabel.querySelector("img").src = this.eraserRadio.checked
      ? "assets/menu icons/active-eraser.png"
      : "assets/menu icons/inactive-eraser.png";

    // update bg color icon based on whether the bg color is checked
    this.bgColorLabel.querySelector("img").src = this.bgColorRadio.checked
      ? "assets/menu icons/active-background-color.png"
      : "assets/menu icons/inactive-background-color.png";
  }

  detectChange() {
    // update icon clr when tool is changed
    [this.brushRadio, this.eraserRadio, this.bgColorRadio].forEach((radio) => {
      radio.addEventListener("change", () => this.updateIcon());
    });
  }
}

export default ToolIcon;
