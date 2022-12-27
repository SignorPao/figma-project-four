import React from "react";

// import Link
import { HashLink as Link } from 'react-router-hash-link';

// import data
import { headerData } from "../data";

const Header = () => {
  // destructure header data
  const { title, subtitle, headerBtn } = headerData;

  return (
    <header
      id="home"
      className="h-screen bg-heroMobile xl:bg-hero bg-cover bg-top xl:bg-center bg-no-repeat"
    >
      <div className="wrapper w-full h-full flex flex-col pt-[50vh] text-center xl:text-left xl:pt-0 title-gap items-center xl:items-start justify-center xl:justify-center">
        <h1 className="font-primary capitalize text-primary-400 font-semibold lg:leading-[60px] text-3xl lg:text-[50px] lg:max-w-[390px]">
          {title}
        </h1>
        <p className="font-euclidRegular text-primary-300 lg:text-lg lg:max-w-[400px]">
          {subtitle}
        </p>
        <Link to={"/#plans"} className="btn">
          {headerBtn}
        </Link>
      </div>
    </header>
  );
};

export default Header;
