import Carousel from "./Carousel";

function Izohlar() {
  const izohlar = [
    {
      id: 1,
      name: "Sabina Halilova",
      subject: "Senior backend dasturchi",
      history:
        "Nibh lectus quisque pellentesque lacus. Et lectus diam facilisis etiam sagittis. Arcu mauris s leo ut. Faucibus.",
      img: "student1.png",
    },
    {
      id: 2,
      name: "Mirvohid Saidahmatov",
      subject: "Amet tempus ut sit enim.",
      history:
        "Facilisis a lectus augue sit. Placerat bibendum amet quis elementum,netus. Ut sit proin cras pharetra. Nunc proin et.",
      img: "student2.png",
    },
    {
      id: 3,
      name: "Azam Muhammadyor",
      subject: "Viverra vehicula at.",
      history:
        "Cursus odio dapibus mauris nibh. Ultricies non in commodo ornare tellus diam. Nunc mi non ac morbi magnis.",
      img: "student3.png",
    },
    {
      id: 4,
      name: "Mirvohid Saidahmatov",
      subject: "Amet tempus ut sit enim.",
      history:
        "Facilisis a lectus augue sit. Placerat bibendum amet quis elementum,netus. Ut sit proin cras pharetra. Nunc proin et.",
      img: "student2.png",
    },
  ];

  return (
    <section className="section section-reviews" id="izohlar">
      <div className="section__head">
        <h2 className="heading--2">Izohlar</h2>
      </div>
      <div className="section__body">
        <Carousel>
          {izohlar.map((izoh) => (
            <div key={izoh.id} className="slider__item">
              <div className="slider__card">
                <img
                  src={`images/${izoh.img}`}
                  alt={izoh.name}
                  className="slider__img"
                />
                <h4 className="slider__name heading--4">{izoh.name}</h4>
                <p className="body--2 slider__sub">{izoh.subject}</p>
                <p className="body--2--dark slider__text">{izoh.history}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Izohlar;
