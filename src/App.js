import React from "react";
import "./App.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
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
    </div>
  );
}

export default App;
