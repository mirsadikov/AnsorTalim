import ReactDOM from "react-dom";

function Modal({ hide }) {
  const modalRoot = document.getElementById("modal-buy");

  const modal = (
    <div className="modal">
      <div onClick={hide} className="modal__close">
        <span></span>
      </div>
      <form action="#" method="post">
        <div className="form__group">
          <label htmlFor="form-name">
            <h5 className="heading--5 form__label">
              Ism va Familiyangizni kiriting: F.I.O.
            </h5>
          </label>
          <input
            type="text"
            id="form-name"
            placeholder="Bu yerga yozing"
            className="form__input"
          />
        </div>

        <div className="form__group">
          <label htmlFor="form-contact">
            <h5 className="heading--5 form__label">
              Telefon nomer yoki Emailingizni kiriting
            </h5>
          </label>
          <input
            type="text"
            id="form-contact"
            placeholder="Bu yerga yozing"
            className="form__input"
          />
        </div>

        <button className="btn form__btn">Sotib olish</button>
      </form>
    </div>
  );

  return ReactDOM.createPortal(modal, modalRoot);
}

export default Modal;
