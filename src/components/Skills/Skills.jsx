import React from "react";
import SkillsList from "../../services/Constants/SkillsList";

const Skills = () => {
  return (
    <div className="container">
      <div>Skills</div>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {SkillsList.map((skill, index) => (
          <div key={index}>
            <div className="d-flex justify-content-center">
              <img src={skill.img} alt={`${skill.name}-logo`} height={44} />
            </div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
