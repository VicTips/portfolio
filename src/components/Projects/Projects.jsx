import React, { useState, useEffect } from "react";
import ProjectsList from "../../services/Constants/ProjectsList";
import { useSelector } from "react-redux/es/exports";

const Projects = ({ projects }) => {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= window.innerHeight / 3 && setShowing(true);
    });
  }, []);
  const textColor = useSelector((state) => state.styles.textColor);
  const bgColor = useSelector((state) => state.styles.bgColor);
  return (
    <section
      className="container min-vh-100 h-100 d-flex align-items-center justify-content-center py-5"
      ref={projects}
    >
      <div className="">
        <div className="d-flex justify-content-center alignt-items-center py-lg-5 py-3">
          <div>
            <div
              className={`text-center fs-1 fw-bold underline-blue letter-spacing text-blue-dark tags mb-3 ${
                showing ? "animation-1" : "opacity-0"
              }`}
            >
              <span className={textColor}>Projects</span>
            </div>
            <div
              className={`text-secondary mb-xl-3 mb-xxl-4 mb-2 fs-5 text-center ${
                showing ? "animation-1" : "opacity-0"
              }`}
            >
              These are <strong>some</strong> of my projects
            </div>
            <div
              className={`d-flex flex-wrap justify-content-center gap-3 ${
                showing ? "animation-1" : "opacity-0"
              }`}
            >
              {ProjectsList.map((project, index) => (
                <div
                  key={index}
                  className="shadow border border-4 border-white project-card position-relative"
                >
                  <img
                    src={project.screenshoots[0]}
                    style={{ maxHeight: "15rem" }}
                    alt="project-screenshoot"
                    data-bs-toggle="modal"
                    data-bs-target={`#projectModal${index}`}
                    className="img-fluid pointer project-img"
                  />
                  <div
                    className="project-name pointer position-absolute w-100 bg-white"
                    data-bs-toggle="modal"
                    data-bs-target={`#projectModal${index}`}
                  >
                    <div className="text-center fw-bold fs-4 text-blue-gradient">
                      {project.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {ProjectsList.map((project, index) => (
              <div key={index}>
                {/* Details Modal */}
                <div
                  className="modal fade"
                  id={`projectModal${index}`}
                  tabIndex="-1"
                  aria-labelledby={`${project.name} Modal`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered z-index-100">
                    <div className={`${bgColor} modal-content px-4 shadow`}>
                      <div className="modal-header pt-3 pb-1">
                        <h5
                          className="modal-title fw-bold text-blue-gradient fs-2"
                          id="exampleModalLabel"
                        >
                          {project.name}
                        </h5>
                        <div className="text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pointer close"
                            viewBox="0 0 20 20"
                            fill="currentcolor"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            height={34}
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex flex-wrap">
                          {project.technologies.map((technology, index) => (
                            <div
                              key={index}
                              className="me-1 border-0 py-1 px-2 chip shadow"
                              style={{ fontSize: "0.8rem" }}
                            >
                              {technology}
                            </div>
                          ))}
                        </div>
                        <div className={`my-3 ${textColor}`}>
                          {project.description}
                        </div>
                        <div className="d-flex gap-4 ms-2">
                          <a
                            className="d-flex align-items-center gap-1 text-decoration-none fw-bold link-blue"
                            href={project.repository}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ height: "1.1rem" }}
                            >
                              <title>GitHub</title>
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>

                            <div className="ff-fira-code">View Code</div>
                          </a>
                          <a
                            className="d-flex align-items-center gap-1 text-decoration-none fw-bold link-blue"
                            href={project.siteURL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              style={{ height: "1.1rem" }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div className="ff-fira-code">View Project</div>
                          </a>
                        </div>
                        {/* Screenshoots Carousel */}
                        <div
                          id="screenshoots carousel"
                          className="carousel slide my-3"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner border border-4 border-white shadow">
                            {project.screenshoots.map((screenshoot, index) => (
                              <div
                                className={`carousel-item ${
                                  index === 0 && "active"
                                } `}
                                key={index}
                                data-bs-interval="3000"
                              >
                                <img
                                  src={screenshoot}
                                  className="d-block w-100"
                                  alt={`screenshoot-${index}`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
