import React from "react";

// import data
import { footerData } from "../data";

const Footer = () => {
  // destructure footer data
  const { logo, subtitle, icons, linksList, address, copyright, me } =
    footerData;

  return (
    <footer id="contacts" className="section my-0 bg-primary-300">
      <div className="wrapper text-primary-400">
        {/* logo & socials */}
        <div>
          <a
            href="#"
            className="font-primary font-bold text-xl lg:text-2xl 2xl:text-3xl select-none"
          >
            {logo}
          </a>
          <p className="font-euclidLight">{subtitle}</p>
          <div className="flex gap-x-4 items-center justify-start">
            {icons.map((item, index) => {
              // destructure item
              const { icon, href } = item;

              return (
                <div
                  key={index}
                  className="bg-primary-400 w-10 h-10 rounded-full"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img src={icon} alt="socials" className="fill-transparent" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
