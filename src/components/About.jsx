import React from "react";

// import data
import { aboutData } from "../data";

// import images
import Img1 from "../assets/images/screen3-1.webp";
import Img2 from "../assets/images/screen3-3.webp";
import Img3 from "../assets/images/screen3-4.webp";
import Img4 from "../assets/images/screen3-2.webp";

const About = () => {
  // destructure about data
  const { pretitle, title, cards } = aboutData;

  return (
    <section id="about" className="wrapper section">
      {/* about top */}
      <div className="flex flex-col title-gap items-center lg:items-start justify-center text-center lg:text-left">
        <p className="pretitle">{pretitle}</p>
        <h2 className="title">{title}</h2>
      </div>

      {/* about cards mobile */}
      <div className="pt-4 flex flex-col gap-y-8 lg:hidden">
        {cards.map((item, index) => {
          // destructure item
          const { image, title, subtitle } = item;

          return (
            <div key={index} className="shadow-lg">
              {/* image */}
              <div>
                <img src={image} alt="about" />
              </div>

              {/* text */}
              <div className="flex flex-col gap-y-2 p-4">
                <h3 className="font-euclidSemiBold text-lg text-primary-400">
                  {title}
                </h3>
                <p className="font-euclidRegular text-sm text-primary-400">
                  {subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* about cards pc */}
      <div className="hidden lg:grid-container lg:pt-8">
        {/* card one */}
        <div className="one shadow-xl">

          {/* image */}
          <div className="w-full h-[70%]">
            <img
              src={Img1}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>

          {/* text */}
          <div className="w-full h-[30%] flex flex-col gap-y-2 px-6 items-start justify-center">
            <h3 className="font-euclidSemiBold text-lg text-primary-400">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="font-euclidRegular text-sm text-primary-400">
              Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et
              nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel.
              Consectetur augue rhoncus at hendrerit pellentesque.
            </p>
          </div>
        </div>

        {/* card two */}
        <div className="two shadow-xl">
          {/* image */}
          <div className="w-full h-[60%]">
            <img
              src={Img2}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>

          {/* text */}
          <div className="w-full h-[40%] flex flex-col gap-y-2 px-6 items-start justify-center">
            <h3 className="font-euclidSemiBold text-lg text-primary-400">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="font-euclidRegular text-sm text-primary-400">
              Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et
              nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel.
              Consectetur augue rhoncus at hendrerit pellentesque.
            </p>
          </div>
        </div>

        {/* card three */}
        <div className="three shadow-xl">
          {/* image */}
          <div className="w-full h-[60%]">
            <img
              src={Img3}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>

          {/* text */}
          <div className="w-full h-[40%] flex flex-col gap-y-2 px-6 items-start justify-center">
            <h3 className="font-euclidSemiBold text-lg text-primary-400">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="font-euclidRegular text-sm text-primary-400">
              Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et
              nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel.
              Consectetur augue rhoncus at hendrerit pellentesque.
            </p>
          </div>
        </div>

        <div className="four shadow-xl">
          {/* image */}
          <div className="w-full h-[70%]">
            <img
              src={Img4}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* text */}
          <div className="w-full h-[30%] flex flex-col gap-y-2 px-6 items-start justify-center">
            <h3 className="font-euclidSemiBold text-lg text-primary-400">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="font-euclidRegular text-sm text-primary-400">
              Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et
              nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel.
              Consectetur augue rhoncus at hendrerit pellentesque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
