import React from "react";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <Contact />
        <div
          className="text-center py-2 text-secondary"
          style={{ fontSize: "0.9rem" }}
        >
          Copyright © 2022. All Rights Reserved | Designed & Built by Victor
          Arias
        </div>
      </div>
    </div>
  );
};

export default Footer;
