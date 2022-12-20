import React from "react";

// import components
import Header from "../components/Header";
import Plans from "../components/Plans";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Sponsors from "../components/Sponsors";

const Main = () => {
  return (
    <div>
      <Header />
      <Plans />
      <About />
      <Testimonials />
      <Subscribe />
      <Sponsors />
    </div>
  );
};

export default Main;
