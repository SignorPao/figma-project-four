import React from "react";
import { Outlet } from "react-router-dom";

// import components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
