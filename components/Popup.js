class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._boundHandleEscapeClose = this._handleEscapeClose.bind(this);
    this._boundCloseOnOverlay = this._closeOnOverlay.bind(this);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._boundHandleEscapeClose);
    this._popupElement.addEventListener("mousedown", this._boundCloseOnOverlay);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._boundHandleEscapeClose);
    this._popupElement.removeEventListener(
      "mousedown",
      this._boundCloseOnOverlay
    );
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
export default Popup;
