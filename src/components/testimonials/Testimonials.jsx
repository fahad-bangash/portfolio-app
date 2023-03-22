import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Saira Khan",
      review:
        "I am Professional Software Engineer and make professional something.I am Full Stack Developer and make Mobile App.I am Professional Software Engineer and make professional something.I amFull Stack Developer and make Mobile App",
    },
    {
      avatar: AVTR2,
      name: "Arshad Khan",
      review:
        "I am Professional Software Engineer and make professional something.I am Full Stack Developer and make Mobile App.I am Professional Software Engineer and make professional something.I amFull Stack Developer and make Mobile App",
    },
    {
      avatar: AVTR3,
      name: "Ali Khan",
      review:
        "I am Professional Software Engineer and make professional something.I am Full Stack Developer and make Mobile App.I am Professional Software Engineer and make professional something.I amFull Stack Developer and make Mobile App",
    },
    {
      avatar: AVTR4,
      name: "Sumbal Khan",
      review:
        "I am Professional Software Engineer and make professional something.I am Full Stack Developer and make Mobile App.I am Professional Software Engineer and make professional something.I amFull Stack Developer and make Mobile App",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Tesimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
