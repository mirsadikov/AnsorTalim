import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Lavhalar() {
  const images = [
    "gallery1.png",
    "gallery2.png",
    "gallery3.png",
    "gallery4.png",
    "gallery5.png",
    "gallery6.png",
    "gallery1.png",
    "gallery3.png",
    "gallery4.png",
    "gallery6.png",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    arrows: false,
    autoplaySpeed: 3000,
    // autoplay: true,
    dotsClass: "slider__dots",
    className: "slider",
  };

  return (
    <section className="section section-moments" id="lavhalar">
      <div className="section__head">
        <h2 className="heading--2">Darslardan lavhalar</h2>
      </div>
      <div className="section__body gallery">
        <Slider {...sliderSettings}>
          {images.map((image) => (
            <img
              className="gallery__item"
              src={`images/${image}`}
              alt="Gallery Image"
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Lavhalar;
