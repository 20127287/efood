import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="Slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
