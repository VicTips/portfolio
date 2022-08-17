import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../redux/styleSlice";
import Logo from "../../assets/logo-VA-azul.svg";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const textColor = useSelector((state) => state.styles.textColor);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top border-bottom border-secondary">
      <div className="container">
        <div className="navbar-brand">
          <img src={Logo} alt="logo" height="32" />
        </div>

        <div
          className="text-light navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentcolor"
            height={34}
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded ? (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-light mt-2 mt-lg-0">
            <li className="nav-item pointer ps-lg-5 px-0 text-center py-2 py-lg-0 fw-semibold letter-spacing">
              About
            </li>
            <li className="nav-item pointer ps-lg-5 px-0 text-center py-2 py-lg-0 fw-semibold letter-spacing">
              Projects
            </li>
            <li className="nav-item pointer ps-lg-5 px-0 text-center py-2 py-lg-0 fw-semibold letter-spacing">
              Contact
            </li>
            <li
              className="nav-item pointer ps-lg-5 px-0 text-center py-2 py-lg-0"
              onClick={() => dispatch(changeMode())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                style={{ height: "1.4rem" }}
              >
                {textColor === "text-light" ? (
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                )}
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
