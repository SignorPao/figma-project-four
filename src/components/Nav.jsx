import React, { useEffect, useRef, useState } from "react";

// import component
import NavMobile from "./NavMobile";

// import data
import { navData } from "../data";

const Nav = () => {
  // destructure nav data
  const { logo, menu } = navData;

  // nav state
  const [navState, isNavState] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // mobile nav ref
  // const btnRef = useRef(null);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? isNavState(true) : isNavState(false);
    });
  });

  // click outside to close mobile menu
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (navMobile && btnRef.current && !btnRef.current.contains(e.target)) {
  //       setNavMobile(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, [navMobile]);

  return (
    <nav
      className={`${
        navState ? "bg-white py-2 shadow-xl" : "py-6"
      } fixed top-0 left-0 w-full z-50 duration-300`}
    >
      <div className="wrapper flex justify-between items-center">
        {/* logo */}
        <div>
          <a
            href="#"
            className="font-logo text-3xl text-black lg:text-4xl 2xl:text-5xl"
          >
            {logo}
          </a>
        </div>

        {/* nav: mobile - hidden | desktop - show */}
        <ul className="hidden lg:flex gap-x-1">
          {menu.map((item, index) => {
            // destructure menu data
            const { link, href } = item;

            return (
              <li key={index}>
                <a
                  href={`#${href}`}
                  className="font-semibold link 2xl:text-2xl"
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* burger icon: mobile - show | desktop - hidden */}
        <button
          className="lg:hidden z-[100]"
          onClick={() => setNavMobile((prev) => !prev)}
        >
          {navMobile ? (
            <div className="text-2xl" onClick={() => console.log("close")}>
              close
            </div>
          ) : (
            <div className="text-2xl">open</div>
          )}
        </button>

        {/* nav mobile: mobile - toggle(show/hidden) | desktop - hidden */}
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 w-[60vw] transition-all -z-10 lg:hidden`}
          // ref={btnRef}
        >
          <NavMobile click={() => setNavMobile(!navMobile)} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
