import React from "react";

// import data
import { navData } from "../data";

// import Link
import { HashLink as Link } from "react-router-hash-link";

const NavMobile = ({ click }) => {
  // destructure nav data
  const { menu } = navData;

  return (
    <div className="w-full h-full bg-primary-400/90 text-white font-semibold font-primary capitalize">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {menu.map((item, index) => {
          // destructure menu data
          const { link, href } = item;

          return (
            <li key={index}>
              <Link to={`/${href}`} onClick={click}>
                {link}
              </Link>
            </li>
          );
        })}
        <li>
          <Link to={"/services"} onClick={click}>
            Services
          </Link>
        </li>
        <li>
          <Link to={"/login"} onClick={click}>
            Sign in
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
