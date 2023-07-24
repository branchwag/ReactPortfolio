// src/components/Footer.js

import React from "react";

export default function Footer() {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 bg-purple-900">
      <div className="container px-5 py-5 mx-auto text-center">
        <h4>
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
      </div>
    </footer>
  );
}
