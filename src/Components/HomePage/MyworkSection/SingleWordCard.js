import React from "react";
import "./SingleWordCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const SingleWordCard = (props) => {
  const {
    projectName,
    id,
    details,
    Technologies,
    github,
    live,
    img,
  } = props.work;
  return (
    <div className="row mt-3 pt-3 align-items-center">
      <div className="col-md-7">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="col-md-5 boxSetion ">
        <p>{id} </p>
        <h3>{projectName} </h3>
        <p>{details} </p>
        <strong>
          <p>
            <span style={{ color: "yellow" }}>Technologies:</span>{" "}
            {Technologies}{" "}
          </p>
        </strong>
        <div className="links">
          <ul>
            <li style={{ display: "inline" }}>
              <a target="_blank" href={github}>
                <FaGithub />
              </a>
            </li>

            <li style={{ display: "inline" }}>
              <a target="_blank" href={live}>
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleWordCard;
