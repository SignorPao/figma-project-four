import React from "react";

// import data
import { footerData } from "../data";

const Footer = () => {
  // destructure footer data
  const {
    logo,
    subtitle,
    icons,
    linksList,
    address,
    copyright1,
    copyright2,
    me,
  } = footerData;

  return (
    <footer id="contacts" className="section my-0 bg-primary-300">
      <div className="wrapper text-primary-400 flex flex-col gap-y-8">
        {/* footer top */}
        <div className="flex flex-col gap-y-8 pb-6 border-b border-primary-400/20 lg:flex-row lg:gap-x-20 xl:gap-x-28">
          {/* logo & socials */}
          <div className="flex flex-col gap-y-4 items-center text-center lg:text-left lg:flex-[50] lg:items-start lg:justify-start">
            <a
              href="#"
              className="font-primary font-bold text-xl lg:text-2xl 2xl:text-3xl select-none"
            >
              {logo}
            </a>

            <p className="font-euclidLight capitalize">{subtitle}</p>

            <div className="flex gap-x-4 items-center justify-start">
              {icons.map((item, index) => {
                // destructure item
                const { icon, href } = item;

                return (
                  <div
                    key={index}
                    className="bg-primary-400 w-8 h-8 rounded-full"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={icon}
                        alt="socials"
                        className="fill-transparent"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* quick links */}
          <div className="flex flex-col items-center justify-center text-center lg:text-left capitalize lg:flex-[25] lg:items-start lg:justify-start">
            <h3 className="font-euclidMedium text-lg mb-2">
              {linksList.title}
            </h3>
            <ul className="flex flex-col gap-y-4">
              {linksList.links.map((item, index) => {
                // destructure item
                const { link, href } = item;

                return (
                  <li key={index} className="font-euclidLight text-base">
                    <a href={href}>{link}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* address */}
          <div className="flex flex-col items-center justify-center text-center lg:text-left capitalize lg:flex-[25] lg:items-start lg:justify-start">
            <h3 className="font-euclidMedium text-lg mb-2">{address.title}</h3>
            <p className="font-euclidLight text-base">{address.phone}</p>
            <p className="font-euclidLight text-base">{address.addressLine1}</p>
            <p className="font-euclidLight text-base">{address.addressLine2}</p>
          </div>
        </div>

        {/* footer bottom */}
        <div className="flex flex-col lg:flex-row lg:gap-x-2 items-center justify-center font-euclidLight text-sm">
          <p className="">{copyright1}</p>
          <p className="">{copyright2}</p>
          <div className="flex gap-x-1">
            <span>{me.text}</span>
            <a href={me.href} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent link-hover">
              {me.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
