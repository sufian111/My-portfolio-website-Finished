import React, { useState } from "react";
import { Link } from "react-router-dom";
import myArticleData from "../../Data/MyArticleData";
import SingleArticle from "./SingleArticle";

const ArticleSection = () => {
  const articleData = myArticleData;
  const [article, setArticle] = useState(articleData);
  const locationPath = window.location.pathname;
  return (
    <div>
      {locationPath === "/" && (
        <div className="heading_area mb-5">
          <h2 className="workText">
            <span className="text-blue">Some of My</span> Article . . . . . . .
            . . . . . . . . . .
            <span>
              <Link to="/blog">
                <button class="btn btn-outline-success btn-sm">
                  All Article
                </button>
              </Link>
            </span>
          </h2>
        </div>
      )}
      {locationPath === "/blog" && (
        <div className="heading_area mb-5">
          <h2 className="workText">
            <span className="text-blue">All of My</span> Article . . . . . . . .
            . . . . . . . . .
            <span>
              <Link to="/about">
                <button class="btn btn-outline-success btn-sm">About Me</button>
              </Link>
            </span>
          </h2>
        </div>
      )}
      <div className="articleSection row">
        {locationPath === "/" &&
          article
            .slice(0, 3)
            .map((article) => (
              <SingleArticle article={article}></SingleArticle>
            ))}
        {locationPath === "/blog" &&
          article.map((article) => (
            <SingleArticle article={article}></SingleArticle>
          ))}
      </div>
    </div>
  );
};

export default ArticleSection;
