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
            className="font-primary font-bold text-xl text-primary-400 lg:text-2xl 2xl:text-3xl select-none"
          >
            {logo}
          </a>
        </div>

        {/* nav: mobile - hidden | desktop - show */}
        <ul className="hidden lg:flex lg:gap-x-4">
          {menu.map((item, index) => {
            // destructure menu data
            const { link, href } = item;

            return (
              <li key={index}>
                <a
                  href={`#${href}`}
                  className="font-semibold font-primary capitalize text-primary-400 hover:text-accent link-hover 2xl:text-xl select-none"
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
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.21875 9.96875L2.09375 16.0937C1.86458 16.3229 1.57292 16.4375 1.21875 16.4375C0.864583 16.4375 0.572916 16.3229 0.34375 16.0937C0.114583 15.8646 0 15.5729 0 15.2188C0 14.8646 0.114583 14.5729 0.34375 14.3437L6.46875 8.21875L0.34375 2.09375C0.114583 1.86458 0 1.57292 0 1.21875C0 0.864583 0.114583 0.572916 0.34375 0.34375C0.572916 0.114583 0.864583 0 1.21875 0C1.57292 0 1.86458 0.114583 2.09375 0.34375L8.21875 6.46875L14.3437 0.34375C14.5729 0.114583 14.8646 0 15.2188 0C15.5729 0 15.8646 0.114583 16.0937 0.34375C16.3229 0.572916 16.4375 0.864583 16.4375 1.21875C16.4375 1.57292 16.3229 1.86458 16.0937 2.09375L9.96875 8.21875L16.0937 14.3437C16.3229 14.5729 16.4375 14.8646 16.4375 15.2188C16.4375 15.5729 16.3229 15.8646 16.0937 16.0937C15.8646 16.3229 15.5729 16.4375 15.2188 16.4375C14.8646 16.4375 14.5729 16.3229 14.3437 16.0937L8.21875 9.96875Z"
                fill="#ffffff"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#06283D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke="#06283D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke="#06283D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
