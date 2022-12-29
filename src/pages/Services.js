import React from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const Services = () => {
  return (
    <section className="wrapper min-h-screen w-screen flex justify-center">
      <div className="mt-[30vh] border border-primary-400 h-fit p-10">
        <Accordion
          transition={{
            duration: "300ms",
            timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          }}
          className=""
        >
          <AccordionItem>
            {({ open }) => (
              <>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                  <span>What is react-headless-accordion?</span>
                  <svg
                    class={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
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
                  <div className="p-5 font-light">
                    Lorem ipsum dolor sit amet.
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ open }) => (
              <>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                  <span>What is react-headless-accordion?</span>
                  <svg
                    class={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
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
                  <div className="p-5 font-light">
                    Lorem ipsum dolor sit amet.
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ open }) => (
              <>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                  <span>What is react-headless-accordion?</span>
                  <svg
                    class={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
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
                  <div className="p-5 font-light">
                    Lorem ipsum dolor sit amet.
                  </div>
                </AccordionBody>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
