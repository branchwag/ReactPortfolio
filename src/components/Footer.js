// src/components/Footer.js

import React from "react";

export default function Footer() {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 bg-purple-900">
      <div className="container px-5 py-5 mx-auto text-center">
        <h4 className="pb-2">
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>
        </h4>
        <ul className="mt-3 text-lg font-medium text-white-900 dark:text-gray-900 sm:mt-0">
          <li>
            <a
              href="https://github.com/branchwag/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/leanne-branch-85581826/"
              className="mr-4 hover:underline md:mr-6 "
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/branchwag"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 "
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
