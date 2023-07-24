// src/components/Resume

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto pb-10">
          Download a copy of my resume by clicking the card below.
        </p>
        <div className="flex flex-wrap -m-4 justify-center">
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQ-lZZm6h7w_7TH5X7bSFTBjmtvACCSK-W1wjHKNEeMHnxDAWzS-3w1pwisvPTGLg/pub"
            key="./resumethumbnail.png"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative justify-center">
              {/* <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center border-double border-4 border-sky-500"
                src="./resumethumbnail.png"
              /> */}
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100 hover:bg-purple-900">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  LMB's Resume
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Click to see full doc
                </h1>
                <p className="leading-relaxed">
                  A Google Doc hosted resume that provides a bit more detail on
                  my background and previous experience
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
