import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slider.css";

const Slider = (props) => {
  const slides = [];
  for (let i = 0; i < props.url.length; i++) {
    slides.push(
      <SwiperSlide>
        <img src={props.url[i]} alt="Error" />
      </SwiperSlide>
    );
  }
  return (
    <div className="Slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Slider;
