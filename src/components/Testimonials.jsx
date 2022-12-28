import React from "react";

// import component
import TestimonialsCarousel from "./TestimonialsCarousel";

// import data
import { testimonialsData } from "../data";

// import "../carousel.css";
// import { useSwiper } from 'swiper/react';


// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../carousel.css";




const Testimonials = () => {
  // destructure testimonials data
  const { pretitle, title, btnIcon, cards } = testimonialsData;

  // const swiper = useSwiper();

  return (
    <section id="testimonials" className="wrapper section">
      {/* testimonials top */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col title-gap items-center lg:items-start justify-center text-center lg:text-left">
          <p className="pretitle">{pretitle}</p>
          <h2 className="title">{title}</h2>
        </div>

        <div className="hidden lg:flex gap-x-2">
          <div className="left">left</div>
          <div className="right">right</div>
        </div>
      </div>

      {/* testimonials slider */}
      <div className="bg-green-100 mt-4 lg:mt-8 w-full h-[300px]">
        {/* <TestimonialsCarousel cards={cards} /> */}

        <Swiper
          slidesPerView={"auto"}
          // centeredSlides={"true"}
          spaceBetween={10}
          speed={500}
          loop={true}
          // navigation={true}
          navigation={{
            nextEl: ".right",
            prevEl: ".left",
          }}
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
      </div>
    </section>
  );
};

export default Testimonials;
