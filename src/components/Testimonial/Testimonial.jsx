import React from "react";
import "./Testimonial.css";
import portfolio from "../../img/11.jpg";
import portfolio1 from "../../img/11.jpg";
import portfolio2 from "../../img/12.jpg";
import portfolio3 from "../../img/13.jpg";
import portfolio4 from "../../img/14.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
const Testimonial = () => {
  const Clients = [
    {
      img: portfolio,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo eiusmod tempor incididunt ut labore et dolo ",
    },
    {
      img: portfolio1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo eiusmod tempor incididunt ut labore et dolo ",
    },
    {
      img: portfolio2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo eiusmod tempor incididunt ut labore et dolo ",
    },
    {
      img: portfolio3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo eiusmod tempor incididunt ut labore et dolo ",
    },
    {
      img: portfolio4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo eiusmod tempor incididunt ut labore et dolo ",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Excepetional work </span>
        <span>for me ...</span>
        <div
          className="blur t-blur1"
          style={{ bakcground: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
