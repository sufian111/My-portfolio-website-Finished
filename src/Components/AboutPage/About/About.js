import React from "react";
import { Title } from "../../Common/title";
import HeaderSection from "../../HomePage/HeaderSection/HeaderSection";
import Skill from "../Skill";

const About = () => {
  return (
    <div className="container">
      <HeaderSection></HeaderSection>
      <Title title="My Skills" />
      <Skill></Skill>
    </div>
  );
};

export default About;
