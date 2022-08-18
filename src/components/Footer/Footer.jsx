import React from "react";
import Contact from "../Contact/Contact";

const Footer = ({ contact }) => {
  return (
    <div className="min-vh-100">
      <div
        className="bg-dark border-bottom border-secondary d-flex align-items-center contact-section-height"
        ref={contact}
      >
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
            <strong className="text-blue-normal">Victor Arias</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
