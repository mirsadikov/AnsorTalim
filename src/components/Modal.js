import ReactDOM from "react-dom";

function Modal({ hide, children }) {
  const modalRoot = document.getElementById("modal");

  const modal = (
    <div className="modal">
      <div onClick={hide} className="modal__close">
        <span></span>
      </div>
      {children}
    </div>
  );

  return ReactDOM.createPortal(modal, modalRoot);
}

export default Modal;
