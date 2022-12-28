import React from "react";

// import data
import { testimonialsData } from "../data";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  // destructure testimonials data
  const { pretitle, title, cards } = testimonialsData;

  return (
    <section id="testimonials" className="wrapper section">
      {/* testimonials top */}
      <div className="flex items-center justify-between">
        {/* text */}
        <div className="flex flex-col title-gap items-center lg:items-start justify-center text-center lg:text-left">
          <p className="pretitle">{pretitle}</p>
          <h2 className="title">{title}</h2>
        </div>

        {/* buttons */}
        <div className="hidden lg:flex gap-x-4">
          <div className="left w-10 h-10 border border-primary-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 link-hover group">
            <svg
              width="16"
              height="16"
              viewBox="0 0 33 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-125 link-hover"
            >
              <path
                d="M31.1458 1.45835C31.8749 2.18751 32.2395 3.05085 32.2395 4.04835C32.2395 5.0439 31.8749 5.90626 31.1458 6.63543L9.78117 28L31.2187 49.4375C31.8992 50.1181 32.2395 50.9688 32.2395 51.9896C32.2395 53.0104 31.8749 53.8854 31.1458 54.6146C30.4166 55.3438 29.5533 55.7083 28.5558 55.7083C27.5602 55.7083 26.6978 55.3438 25.9687 54.6146L1.46866 30.0417C1.177 29.75 0.969916 29.434 0.847416 29.0938C0.726861 28.7535 0.666582 28.3889 0.666582 28C0.666582 27.6111 0.726861 27.2465 0.847416 26.9063C0.969916 26.566 1.177 26.25 1.46866 25.9583L26.0416 1.38543C26.7221 0.704874 27.5602 0.364595 28.5558 0.364595C29.5533 0.364595 30.4166 0.729179 31.1458 1.45835Z"
                fill="#06283D"
              />
            </svg>
          </div>

          <div className="right rotate-180 w-10 h-10 border border-primary-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 link-hover group">
            <svg
              width="16"
              height="16"
              viewBox="0 0 33 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-125 link-hover"
            >
              <path
                d="M31.1458 1.45835C31.8749 2.18751 32.2395 3.05085 32.2395 4.04835C32.2395 5.0439 31.8749 5.90626 31.1458 6.63543L9.78117 28L31.2187 49.4375C31.8992 50.1181 32.2395 50.9688 32.2395 51.9896C32.2395 53.0104 31.8749 53.8854 31.1458 54.6146C30.4166 55.3438 29.5533 55.7083 28.5558 55.7083C27.5602 55.7083 26.6978 55.3438 25.9687 54.6146L1.46866 30.0417C1.177 29.75 0.969916 29.434 0.847416 29.0938C0.726861 28.7535 0.666582 28.3889 0.666582 28C0.666582 27.6111 0.726861 27.2465 0.847416 26.9063C0.969916 26.566 1.177 26.25 1.46866 25.9583L26.0416 1.38543C26.7221 0.704874 27.5602 0.364595 28.5558 0.364595C29.5533 0.364595 30.4166 0.729179 31.1458 1.45835Z"
                fill="#06283D"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* testimonials slider */}
      <div className="mt-4 lg:mt-8 w-full h-[300px]">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          speed={500}
          loop={true}
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
                className="h-full max-w-[260px] lg:max-w-[450px] border border-primary-400 rounded-md select-none p-5 lg:p-6 flex flex-col items-start justify-between"
              >
                <p className="text-primary-300 font-euclidRegular text-sm lg:text-lg">{text}</p>

                <div className="flex gap-x-3">
                  {/* avatar */}
                  <div className="w-16 h-16">
                    <img src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                  </div>

                  {/* name */}
                  <div className="flex flex-col gap-y-2">
                    <h3 className="from-primary-400 font-euclidSemiBold text-base lg:text-xl">{name}</h3>
                    <p className="from-primary-400 font-euclidRegular text-xs lg:text-base">{position}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
