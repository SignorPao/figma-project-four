import React from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const Services = () => {
  return (
    <section className="wrapper w-screen flex justify-center items-center flex-col gap-y-6 lg:gap-y-12 py-20">
      {/* services top */}
      <div className="flex flex-col items-center justify-center title-gap mt-10 lg:mt-20">
        <p className="pretitle">Lorem ipsum dolor</p>
        <h2 className="title">Lorem ipsum dolor sit amet</h2>
        <p className="font-euclidRegular text-primary-300 lg:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          repellat dolore commodi quisquam, libero aut suscipit quidem? Quasi
          velit asperiores odio quaerat accusamus autem, minus atque fugit
          facere, esse accusantium.
        </p>
      </div>

      {/* accordion */}
      <div className="border border-primary-400 h-fit w-full p-10 rounded">
        <Accordion
          transition={{
            duration: "300ms",
            timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          }}
          className="font-euclidRegular"
        >
          <AccordionItem>
            {({ open }) => (
              <>
                <AccordionHeader className="w-full flex justify-between items-center text-primary-400 font-euclidSemiBold capitalize text-base lg:text-lg border-b p-4 text-left">
                  <span>Lorem ipsum dolor sit?</span>
                  <svg
                    className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </AccordionHeader>

                <AccordionBody>
                  <div className="p-5 text-primary-300 font-euclidRegular capitalize text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quae earum reiciendis repudiandae eos vitae expedita
                    perferendis, voluptatum adipisci. Incidunt, quo. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Perspiciatis.
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ open }) => (
              <>
                <AccordionHeader className="w-full flex justify-between items-center border-b p-4 text-primary-400 font-euclidSemiBold capitalize text-base lg:text-lg text-left">
                  <span>Lorem ipsum dolor sit amet?</span>
                  <svg
                    className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </AccordionHeader>

                <AccordionBody>
                  <div className="p-5 text-primary-300 font-euclidRegular capitalize text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum blanditiis ducimus dolores ipsam sint voluptate. Quas
                    unde voluptas iste nesciunt commodi. Officia quibusdam neque
                    quidem omnis sapiente voluptatibus delectus odit!
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ open }) => (
              <>
                <AccordionHeader className="w-full flex justify-between items-center border-b p-4 text-primary-400 font-euclidSemiBold capitalize text-base lg:text-lg text-left">
                  <span>Lorem ipsum dolor sit?</span>
                  <svg
                    className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </AccordionHeader>

                <AccordionBody>
                  <div className="p-5 text-primary-300 font-euclidRegular capitalize text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque neque dolore id. Veritatis ea quod officia ipsum eum
                    corrupti quam laudantium tempora. Quae, ullam ipsum!
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>

      {/* services bottom */}
      <p className="font-euclidRegular text-primary-300 lg:text-lg text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        numquam saepe perspiciatis nobis beatae aspernatur necessitatibus atque
        modi, unde laudantium alias in temporibus blanditiis laborum aliquid
        amet veritatis inventore pariatur vero magni libero corrupti tenetur
        harum. Numquam, dolorem! Amet, magni tempora, tempore voluptatibus
        magnam nostrum obcaecati accusamus exercitationem officiis consequuntur
        totam optio repellendus molestias modi vitae quas, suscipit consectetur
        vero.
      </p>
      <p className="font-euclidLight text-primary-300 text-xs lg:text-sm text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates
        perspiciatis facilis animi cum impedit qui deleniti a fugit praesentium
        suscipit assumenda similique tempore esse labore mollitia, incidunt quod
        temporibus alias sint nostrum ea iusto. Perspiciatis, maiores deserunt
        officia repellat maxime, optio praesentium alias, eaque quod tenetur
        unde! Praesentium ex earum laudantium natus odio quae.
      </p>
    </section>
  );
};

export default Services;
