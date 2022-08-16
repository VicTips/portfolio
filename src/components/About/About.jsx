import React from "react";
import Skills from "../Skills/Skills";

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
          <div className="btn btn-dark d-inline-block my-3">Download CV</div>
        </div>
      </div>
    </div>
  );
};

export default About;
