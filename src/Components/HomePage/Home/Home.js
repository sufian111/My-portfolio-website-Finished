import React from "react";
import ArticleSection from "../ArticleSection/ArticleSection";
import HeaderSection from "../HeaderSection/HeaderSection";
import MyworkSection from "../MyworkSection/MyworkSection";
import NavBarTop from "../NavBarTop/NavBarTop";

import "./Home.css";
import LastPart from "./LastPart/LastPart";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <HeaderSection></HeaderSection>
        <MyworkSection></MyworkSection>
        <ArticleSection></ArticleSection>
        <LastPart></LastPart>
      </div>
    </div>
  );
};

export default Home;
