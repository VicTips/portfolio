import React from "react";
import Skills from "../Skills/Skills";
import CV from "../../assets/VictorArias-CV-FullStackWebDeveloper.pdf";

const About = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5 mt-md-0 row min-vh-100 mx-auto pt-5 pt-md-0">
      <div className="col-md-7">
        <div className="text-center">
          <div className="pb-3">
            <img
              src="https://images2.imgbox.com/1e/31/cgCab1v0_o.png"
              alt="profile pic"
              className="rounded-circle shadow"
              height={220}
            />
          </div>
          <div className="fs-1 fw-bold">
            Hi, I'm <span className="text-blue-dark">Victor</span>
          </div>
          <div className="fs-2 fw-bold text-secondary">
            Full Stack Web Developer
          </div>
          <div className="d-flex justify-content-center">
            <a
              href={CV}
              download="Victor_Arias-CV-Full_Stack_Web_Developer.pdf"
              className="btn-blue d-inline-block mt-3 text-decoration-none letter-spacing"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-5 d-flex align-items-center">
        <Skills />
      </div>
    </div>
  );
};

export default About;
