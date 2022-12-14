import React from "react";
import { useSelector } from "react-redux";
import Skills from "../Skills/Skills";
import CV from "../../assets/VictorArias-CV-FullStackWebDeveloper.pdf";

const About = ({ about }) => {
  const textColor = useSelector((state) => state.styles.textColor);
  return (
    <section
      className="container d-flex align-items-center justify-content-center row min-vh-100 mx-auto pt-5 pt-lg-0 animation-1"
      ref={about}
    >
      <div className="col-lg-6 col-xl-5 pt-5 pt-lg-0">
        <div className="text-center">
          <div className="pb-3" id="profile-picture">
            <img
              src="https://images2.imgbox.com/1e/31/cgCab1v0_o.png"
              alt="profile pic"
              className="rounded-circle shadow border-3 border-white border fade-in-2"
              height={220}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div style={{ maxWidth: "32rem" }}>
              <div
                className="fs-1 fw-bold text-secondary text-start"
                id="greeting"
              >
                Hi there!
              </div>
              <div className={`${textColor} fs-name`} id="greeting-name">
                I'm Victor Arias
              </div>
              <div
                className="fs-2 fw-bold text-blue-gradient text-center"
                id="greeting-title"
              >
                Full Stack Web Developer
              </div>
              <div className="text-secondary fs-5" id="greeting-fact">
                (I also love drumming and watching horror movies)
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center" id="btn-cv">
            <a
              href={CV}
              download="Victor_Arias-CV-Full_Stack_Web_Developer.pdf"
              className="btn-blue d-inline-block mt-3 text-decoration-none letter-spacing fw-bold shadow border-white border-2 border"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-lg-6 col-xl-7 d-flex align-items-center mt-5 my-lg-0"
        id="skills"
      >
        <Skills />
      </div>
    </section>
  );
};

export default About;
