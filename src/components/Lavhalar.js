import { useState, useEffect } from "react";
import Modal from "./Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "akar-icons";

const images = [
  {
    id: 1,
    src: "gallery1.png",
  },
  {
    id: 2,
    src: "gallery2.png",
  },
  {
    id: 3,
    src: "gallery3.png",
  },
  {
    id: 4,
    src: "gallery4.png",
  },
  {
    id: 5,
    src: "gallery5.png",
  },
  {
    id: 6,
    src: "gallery6.png",
  },
  {
    id: 7,
    src: "gallery1.png",
  },
  {
    id: 8,
    src: "gallery3.png",
  },
  {
    id: 9,
    src: "gallery4.png",
  },
  {
    id: 10,
    src: "gallery6.png",
  },
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
  autoplay: true,
  dotsClass: "slider__dots",
  className: "slider",
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function Lavhalar() {
  const [imagePortalOpen, setImagePortalOpen] = useState(false);
  const [currentImageId, setCurrentImageId] = useState(1);
  const [currentImageSrc, setCurrentImageSrc] = useState();

  useEffect(() => {
    const imageContainers = document.querySelectorAll(
      "#lavhalar .slick-slide > div"
    );

    imageContainers.forEach((container) => {
      container.addEventListener("click", (e) => {
        const imgId = Number(e.target.children[0].getAttribute("data-id"));
        setCurrentImageId(imgId);
        setImagePortalOpen(true);
      });
    });
  }, []);

  useEffect(() => {
    setCurrentImageSrc(
      images.filter((image) => image.id === currentImageId)[0].src
    );
  }, [currentImageId]);

  const openImage = () => {
    setImagePortalOpen(true);
  };

  const onHide = () => {
    setImagePortalOpen(false);
  };

  const prevImg = () => {
    currentImageId === 1
      ? setCurrentImageId(images.length)
      : setCurrentImageId((id) => id - 1);

    setCurrentImageSrc(
      images.filter((image) => image.id === currentImageId)[0].src
    );
  };
  const nextImg = () => {
    currentImageId === images.length
      ? setCurrentImageId(1)
      : setCurrentImageId((id) => id + 1);

    setCurrentImageSrc(
      images.filter((image) => image.id === currentImageId)[0].src
    );
  };

  return (
    <section className="section section-moments" id="lavhalar">
      <div className="section__head">
        <h2 className="heading--2" onClick={openImage}>
          Darslardan lavhalar
        </h2>
      </div>
      <div className="section__body gallery">
        <Slider {...sliderSettings}>
          {images.map((image) => (
            <img
              key={image.id}
              className="gallery__item"
              src={`images/${image.src}`}
              alt="Students"
              data-id={image.id}
            />
          ))}
        </Slider>
      </div>
      {imagePortalOpen ? (
        <Modal hide={onHide}>
          <div className="image-portal">
            <button
              onClick={prevImg}
              className="image-portal__prev btn image-portal__btn"
            >
              <ChevronLeft size={24} />
            </button>
            <img
              src={`images/${currentImageSrc}`}
              alt="Students"
              className="image-portal__img"
            />
            <button
              onClick={nextImg}
              className="image-portal__next btn image-portal__btn"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

export default Lavhalar;
