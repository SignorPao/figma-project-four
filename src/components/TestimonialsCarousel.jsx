import React from "react";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../carousel.css";

const TestimonialsCarousel = ({ cards }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      // centeredSlides={"true"}
      spaceBetween={10}
      speed={500}
      loop={true}
      navigation={true}
      // navigation={{
      //   nextEl: ".right",
      //   prevEl: ".left",
      // }}
      breakpoints={{
        1024: {
          spaceBetween: 20,
        },
        1540: {
          spaceBetween: 30,
        },
      }}
      modules={[Navigation]}
      className="w-full h-full carousel"
    >
      {cards.map((item, index) => {
        // destructure item
        const { text, avatar, name, position } = item;

        return (
          <SwiperSlide
            key={index}
            className="h-full max-w-[260px] lg:max-w-[400px] border border-primary-400 rounded-md select-none"
          >
            slide
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialsCarousel;
