import CanvasHandler from "./scripts/canvasHandler";
import ToolIcon from "./scripts/toolIcon";
import Modal from "./scripts/modal";

document.addEventListener("DOMContentLoaded", () => {
  new CanvasHandler();
  new ToolIcon();
  new Modal();
});

