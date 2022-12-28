import React from "react";

// import data
import { sponsorsData } from "../data";

const Sponsors = () => {
  // destructure sponsors data
  const { google, pinterest, reddit, figma, stripe } = sponsorsData;

  return (
    <section className="wrapper section flex flex-col gap-y-4 lg:flex-row items-center justify-between">
      <img
        src={google}
        alt="google"
        className="cursor-pointer grayscale hover:grayscale-0 link-hover w-24 lg:w-36"
      />
      <img
        src={pinterest}
        alt="pinterest"
        className="cursor-pointer grayscale hover:grayscale-0 link-hover w-32 lg:w-36"
      />
      <img
        src={reddit}
        alt="reddit"
        className="cursor-pointer grayscale hover:grayscale-0 link-hover w-28 lg:w-36"
      />
      <img
        src={figma}
        alt="figma"
        className="cursor-pointer grayscale hover:grayscale-0 link-hover w-20 lg:w-24"
      />
      <img
        src={stripe}
        alt="stripe"
        className="cursor-pointer grayscale hover:grayscale-0 link-hover w-16 lg:w-24"
      />
    </section>
  );
};

export default Sponsors;
