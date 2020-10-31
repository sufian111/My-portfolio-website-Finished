import React from "react";
import ArticleSection from "../../HomePage/ArticleSection/ArticleSection";
import { BiArrowFromBottom } from "react-icons/bi";

const Blog = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container">
      <ArticleSection></ArticleSection>
      <p className="p-4 mt-3 text-center">
        Designed & Built by <span className="text-blue"> Md. Abu Sufian</span>
      </p>
      <div style={{ textAlign: "center" }}>
        <BiArrowFromBottom onClick={scrollTop} style={{ fontSize: "32px" }} />
      </div>
    </div>
  );
};

export default Blog;
