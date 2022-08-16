import React from "react";
import Logo from "../../logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={Logo} alt="logo" height="28" />
          Victor Arias
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-secondary mt-2 mt-lg-0">
            <li className="nav-item px-lg-5 px-0 text-center py-2 py-lg-0">
              About
            </li>
            <li className="nav-item px-lg-5 px-0 text-center py-2 py-lg-0">
              Project
            </li>
            <li className="nav-item px-lg-5 px-0 text-center py-2 py-lg-0">
              Contact
            </li>
            <li className="nav-item px-lg-5 px-0 text-center py-2 py-lg-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                style={{height: "1.2rem"}}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
