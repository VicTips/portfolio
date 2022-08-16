import React from "react";

const About = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div>
        <div className="row text-center">
          <div className="fs-1 fw-bold">Hi, I'm Victor</div>
          <div className="fs-2 fw-bold text-secondary">
            Full Stack Web Developer
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="btn btn-dark d-inline-block">Download CV</div>
        </div>
      </div>
    </div>
  );
};

export default About;
