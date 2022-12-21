import React from "react";

// import data
import { navData } from "../data";

const NavMobile = ({ click }) => {
  // destructure nav data
  const { menu } = navData;

  return (
    <div className="w-full h-full bg-primary-400 text-white">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {menu.map((item, index) => {
          // destructure menu data
          const { link, href } = item;

          return (
            <li key={index}>
              <a href={`#${href}`} onClick={click}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
