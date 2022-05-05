import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import natural2 from "../../img/12.jpg";
import natural3 from "../../img/13.jpg";
import natural4 from "../../img/14.jpg";
import natural5 from "../../img/15.jpg";
import natural1 from "../../img/11.jpg";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Protfolio</span>
      {/* swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="Portfolio-slider"
      >
        <SwiperSlide>
          <img src={natural1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={natural2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={natural4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={natural4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={natural4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
