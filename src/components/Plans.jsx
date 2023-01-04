import React from "react";

// import data
import { plansData } from "../data";

const Plans = () => {
  // destructure plans data
  const { pretitle, title, cards } = plansData;

  return (
    <section id="plans" className="wrapper section">
      {/* plans top */}
      <div className="flex flex-col title-gap items-center lg:items-start justify-center text-center lg:text-left">
        <p className="pretitle">{pretitle}</p>
        <h2 className="title">{title}</h2>
      </div>

      {/* plans cards */}
      <div className="pt-4 lg:pt-8 flex flex-col gap-4 lg:flex-row">
        {cards.map((item, index) => {
          // destructure item
          const { icon, title, subtitle, btnText } = item;

          return (
            <div
              key={index}
              className="flex-1 border border-primary-400 rounded flex flex-col gap-y-4 justify-center items-start py-10 px-14 group"
            >
              <div className="mb-4 flex justify-center items-center bg-primary-200 rounded  w-14 lg:w-20 h-14 lg:h-20">
                <img
                  src={icon}
                  alt="icon"
                  className="w-5 lg:w-8 group-hover:animate-pulse"
                />
              </div>

              <h3 className="text-primary-400 font-euclidSemiBold capitalize text-base lg:text-lg">
                {title}
              </h3>

              <p className="text-primary-300 font-euclidRegular capitalize text-xs lg:text-sm">
                {subtitle}
              </p>

              <button className="mt-4 btn border border-accent bg-transparent hover:bg-accent link-hover flex gap-x-2 items-center">
                {btnText}{" "}
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 42 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 18.5H41M23.5 1L41 18.5L23.5 36"
                      stroke="black"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Plans;
