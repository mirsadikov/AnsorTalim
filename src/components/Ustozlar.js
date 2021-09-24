import Carousel from "./Carousel";

function Ustozlar() {
  const ustozlar = [
    {
      id: 1,
      name: "Mo‘minov Otabekov",
      subject: "Matematika",
      history:
        "8 yillik tajribaga ega ustozimiz, 2013-yilda Magistraturani tamomlagan. Hozirda 50 dan ortiq shogirtlarga ega",
      img: "tutor1-big.png",
    },
    {
      id: 2,
      name: "Rasulov Jasurbek",
      subject: "Fizika",
      history:
        "8 yillik tajribaga ega ustozimiz, 2013-yilda Magistraturani tamomlagan. Hozirda 50 dan ortiq shogirtlarga ega",
      img: "tutor2-big.png",
    },
    {
      id: 3,
      name: "Inoyatov Og‘abek",
      subject: "Mental arifmetika",
      history:
        "8 yillik tajribaga ega ustozimiz, 2013-yilda Magistraturani tamomlagan. Hozirda 50 dan ortiq shogirtlarga ega",
      img: "tutor3-big.png",
    },
    {
      id: 4,
      name: "Rasulov Jasurbek",
      subject: "Fizika",
      history:
        "8 yillik tajribaga ega ustozimiz, 2013-yilda Magistraturani tamomlagan. Hozirda 50 dan ortiq shogirtlarga ega",
      img: "tutor2-big.png",
    },
  ];

  return (
    <section className="section section-tutors" id="ustozlar">
      <div className="section__head">
        <h2 className="heading--2">Ustozlar</h2>
      </div>
      <div className="section__body">
        <Carousel>
          {ustozlar.map((ustoz) => (
            <div key={ustoz.id} className="slider__item">
              <div className="slider__card">
                <img
                  src={`images/${ustoz.img}`}
                  alt={ustoz.name}
                  className="slider__img"
                />
                <h4 className="slider__name heading--4">{ustoz.name}</h4>
                <p className="body--2 slider__sub">
                  {ustoz.subject} o‘qituvchisi
                </p>
                <p className="body--2--dark slider__text">{ustoz.history}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Ustozlar;
