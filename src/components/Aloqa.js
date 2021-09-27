import NumberFormat from "react-number-format";

function Aloqa() {
  return (
    <section className="section section-contact" id="aloqa">
      <div className="section__head">
        <h2 className="heading--2">Aloqa</h2>
      </div>
      <div className="section__body">
        <form action="#" method="post" className="form-contact">
          <div className="form__group">
            <label htmlFor="form-name">
              <h5 className="heading--5 form__label">
                Ism va Familiyangizni kiriting:
              </h5>
            </label>
            <input
              type="text"
              id="form-name"
              placeholder="F.I.O."
              className="form__input"
              required
            />
          </div>

          <div className="form__group">
            <label htmlFor="form-contact">
              <h5 className="heading--5 form__label">
                Telefon nomeringizni kiriting
              </h5>
            </label>
            <NumberFormat
              required
              type="tel"
              id="form-contact"
              placeholder="Bu yerga yozing"
              className="form__input"
              format="+988 (##) ###-##-##"
              mask="_"
              allowEmptyFormatting={true}
              fixedDecimalScale={false}
              thousandsGroupStyle="thousand"
              displayType="input"
            />
          </div>

          <button className="btn form__btn">Yuborish</button>
        </form>
      </div>
    </section>
  );
}

export default Aloqa;
