import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ children }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    // centerMode: true,
    centerPadding: "0px",
    dotsClass: "slider__dots",
    className: "slider",
  };

  return <Slider {...sliderSettings}>{children}</Slider>;
}

export default Carousel;
