import React, { useState } from "react";
import ProjectsList from "../../services/Constants/ProjectsList";

const Projects = () => {
  const [projectImg, setProjectImg] = useState("");
  console.log(projectImg);
  return (
    <div className="container min-vh-100">
      <div className="text-center fs-1 fw-bold underline-blue">Projects</div>
      <div className="d-flex justify-content-around gap-2 flex-wrap">
        {ProjectsList.map((project, index) => (
          <div key={index}>
            <div
              onMouseEnter={() => setProjectImg(project.img)}
              data-bs-toggle="modal"
              data-bs-target={`#deleteModal${index}`}
              className="fw-semibold text-secondary fs-5"
            >
              {project.name}
            </div>
            {/* Details Modal */}
            <div
              className="modal fade"
              id={`deleteModal${index}`}
              tabIndex="-1"
              aria-labelledby={`${project.name} Modal`}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-light px-4 rounded-4">
                  <div className="modal-header pt-3 pb-1">
                    <h5
                      className="modal-title fw-bold text-blue-dark fs-2"
                      id="exampleModalLabel"
                    >
                      {project.name}
                    </h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#38afb3"
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
                  <div className="modal-body">
                    <div className="d-flex flex-wrap">
                      {project.technologies.map((technology, index) => (
                        <div
                          key={index}
                          className="me-1 border py-1 px-2 rounded-2 chip shadow"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {technology}
                        </div>
                      ))}
                    </div>
                    <div className="my-3">{project.description}</div>
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
                          style={{ height: "1.1rem" }} //Agregar clase
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
                          style={{ height: "1.1rem" }} //Agregar clase
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
                      <div className="carousel-inner rounded-4 shadow">
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

                  {/* <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {projectImg !== "" && (
        <div className="d-flex justify-content-center">
          <img
            src={projectImg}
            alt="projectImg"
            className="img-fluid"
            style={{ maxHeight: "30rem" }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
