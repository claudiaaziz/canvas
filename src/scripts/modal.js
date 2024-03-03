class Modal {
  constructor() {
    this.setUpModel();
    this.showModal();
  }

  setUpModel() {
    this.modal = document.getElementById("modal");
    this.closeButtons = document.querySelectorAll(".close-modal");
    this.helpIcon = document.getElementById("help-icon");

    this.closeButtons.forEach((button) =>
      button.addEventListener("click", () => this.closeModal())
    );
    this.helpIcon.addEventListener("click", () => this.showModal());

    document.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });
  }

  showModal = () => (this.modal.style.display = "flex");
  closeModal = () => (this.modal.style.display = "none");
}

export default Modal;
