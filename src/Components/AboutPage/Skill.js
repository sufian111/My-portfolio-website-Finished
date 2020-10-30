import React, { useState } from "react";
import { Title } from "../Common/title";
import mySkills from "../Data/skills";

import "./skill.css";

const Skill = () => {
  const skillsName = Object.keys(mySkills);
  const [selectedSkill, setSelectedSkill] = useState(skillsName[0]);
  const selectedSkills = mySkills[selectedSkill];
  return (
    <div id="skill" className="skill-area mt-5">
      <div className="container">
        <div className="skills">
          <ul className="skill-nav">
            {skillsName.map((name) => (
              <li
                onClick={() => setSelectedSkill(name)}
                className={name === selectedSkill ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="skill">
            {selectedSkills.map(({ name, percent }) => (
              <div key={name} className="card">
                <h4>{name}</h4>
                <p>{percent}%</p>
                <div style={{ width: percent + "%" }} className="progress-ar" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
