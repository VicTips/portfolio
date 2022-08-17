import React from "react";
import Skills from "../Skills/Skills";
import CV from "../../assets/VictorArias-CV-FullStackWebDeveloper.pdf";

const About = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="mt-5">
        <div className="row text-center mt-5">
          <div className="pb-3">
            <img
              src="https://images2.imgbox.com/1e/31/cgCab1v0_o.png"
              alt="profile pic"
              className="rounded-circle"
              height={220}
            />
          </div>
          <div className="fs-1 fw-bold">Hi, I'm Victor</div>
          <div className="fs-2 fw-bold text-secondary">
            Full Stack Web Developer
          </div>
          <Skills />
        </div>
        <div className="d-flex justify-content-center">
          <a
            href={CV}
            download="Victor_Arias-CV-Full_Stack_Web_Developer.pdf"
            className="btn btn-outline-info d-inline-block my-3"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
