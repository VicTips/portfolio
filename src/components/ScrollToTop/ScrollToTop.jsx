import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showBtn && (
        <div
          onClick={() => scrollTop()}
          className="pointer btn-back-top d-flex align-items-center justify-content-center shadow border border-2 border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={30}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
