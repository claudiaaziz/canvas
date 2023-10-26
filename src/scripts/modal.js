class Modal {
  constructor() {
    this.modal = document.getElementById("modal");
    this.closeButtons = document.querySelectorAll(".close-button");

    this.closeButtons.forEach((button) =>
      button.addEventListener("click", () => this.closeModal())
    );

    this.showModal();
  }

  showModal = () => {
    this.modal.style.display = "flex";
  };

  closeModal = () => {
    this.modal.style.display = "none";
  };
}

export default Modal;
