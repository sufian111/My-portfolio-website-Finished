import React from "react";

import "./SingleArticle.css";

const SingleArticle = (props) => {
  const { id, name, details, img, Technologies, blogUrl } = props.article;

  const handleUrl = () => {
    console.log("ok");
  };

  return (
    <div className="col-md-4 mt-4">
      <a
        style={{ textDecoration: "none", color: "white", outline: "none" }}
        class="blog-link"
        target="_blank"
        href={blogUrl}
      >
        <div
          onClick={handleUrl}
          class="card bg-dark boxStyle"
          style={{ width: "100%" }}
        >
          <img class="card-img-top" src={img} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{name} </h5>
            <p class="card-text">{details}</p>
            <div class="card-footer">
              <small class="text-white">{Technologies} </small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SingleArticle;
