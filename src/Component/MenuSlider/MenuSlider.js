import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./MenuSlider.scss";

const MenuSlider = (props) => {
  const slides = [];
  for (let i = 0; i < props.slides.length; i++) {
    slides.push(<SwiperSlide>{props.slides[i]}</SwiperSlide>);
  }
  return (
    <div className="MenuSlider">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default MenuSlider;
