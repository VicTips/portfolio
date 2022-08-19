import React from "react";
import SkillsList from "../../services/Constants/SkillsList";
import { useSelector } from "react-redux/es/exports";

const Skills = () => {
  const textColor = useSelector((state) => state.styles.textColor);
  return (
    <div className="container">
      <div className="text-center fs-1 fw-bold underline-blue mb-4 letter-spacing text-blue-dark tags">
        <span className={textColor}>Skills</span>
      </div>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {SkillsList.map((skill, index) => (
          <div key={index}>
            <div className="d-flex justify-content-center ">
              <img
                src={skill.img}
                alt={`${skill.name}-logo`}
                height={38}
                className={
                  textColor === "text-light-va" &&
                  (skill.name === "Express" || skill.name === "GitHub")
                    ? "filter"
                    : skill.name === "JavaScript"
                    ? "shadow-sm"
                    : ""
                }
              />
            </div>
            <div
              className="text-center fw-semibold"
              style={{ fontSize: "0.8rem", marginTop: "0.1rem" }}
            >
              <div className={textColor}>{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
