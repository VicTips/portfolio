import React from "react";
import SkillsList from "../../services/Constants/SkillsList";

const Skills = () => {
  return (
    <div className="container my-3">
      {/* <div className="text-center fs-1 fw-bold">Skills</div> */}
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {SkillsList.map((skill, index) => (
          <div key={index}>
            <div className="d-flex justify-content-center">
              <img src={skill.img} alt={`${skill.name}-logo`} height={34} />
            </div>
            <div className="text-center fw-semibold" style={{ fontSize: "0.8rem" }}>
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
