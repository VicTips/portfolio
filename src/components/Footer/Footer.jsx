import React from "react";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <>
      <div className="bg-dark border-top border-bottom border-secondary">
        <div className="container">
          <Contact />
        </div>
      </div>
      <div className="bg-dark">
        <div className="container">
          <div
            className="text-center py-3 text-light"
            style={{ fontSize: "0.9rem" }}
          >
            Copyright © 2022. All Rights Reserved | Designed & Built by{" "}
            <em className="text-blue-normal">Victor Arias</em>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
