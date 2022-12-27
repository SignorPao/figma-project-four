import React from "react";

// import data
import { aboutData } from "../data";

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
      <div className="pt-4 lg:pt-8 flex flex-col gap-y-8">
        {cards.map((item, index) => {
          // destructure item
          const { image, title, subtitle, order } = item;

          return (
            <div key={index} className={`shadow-lg order-${Number(order)}`}>
              {/* image */}
              <div>
                <img src={image} alt="about" />
              </div>

              {/* text */}
              <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
