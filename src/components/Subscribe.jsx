import React from "react";

// import data
import { subscribeData } from "../data";

const Subscribe = () => {
  // destructure subscribe data
  const { pretitle, title, subtitle, placeholder, subscribeBtn } =
    subscribeData;

  return (
    <section className="section bg-primary-100">
      <div className="wrapper flex flex-col items-center justify-center title-gap">
        <p className="pretitle">{pretitle}</p>

        <h2 className="title text-center">{title}</h2>

        <p className="font-euclidRegular text-primary-300 lg:text-lg text-center">
          {subtitle}
        </p>
        
        <div className="flex gap-x-1 bg-white border border-primary-200 rounded p-1 w-full lg:max-w-[500px]">
          <input
            type="email"
            placeholder={placeholder}
            className="w-full border-none outline-none focus:ring-0 bg-transparent placeholder-primary-200 font-euclidRegular px-1 focus:invalid:text-red-500"
          />
          <button type="submit" className="btn">
            {subscribeBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
