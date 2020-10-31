import React, { useState } from "react";
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

  const [hover, setHover] = useState(true);
  const handleHover = () => {
    setHover(false);
    setNoPic(false);
  };

  const [noPic, setNoPic] = useState(true);

  return (
    <div className="row mt-3 pt-3 align-items-center ">
      {hover ? (
        <div onClick={handleHover} className="col-md-7 parent">
          <img className="img-fluid" src={img} alt="" />
          {/* this will show when hover */}
        </div>
      ) : (
        <div className="col-md-7 text-center child">
          <ul>
            <li style={{ display: "inline" }}>
              <a target="_blank" href={github}>
                <FaGithub style={{ fontSize: "32px", marginRight: "15px" }} />
              </a>
            </li>

            <li style={{ display: "inline" }}>
              <a target="_blank" href={live}>
                <FaExternalLinkAlt
                  style={{
                    fontSize: "32px",
                    marginLeft: "15px",
                    marginRight: "35px",
                  }}
                />
              </a>
            </li>
          </ul>
          <button
            onClick={() => {
              setHover(true);
              setNoPic(true);
            }}
            className="btn btn-primary"
          >
            Show Picture
          </button>
        </div>
      )}

      {/* it is the details section */}
      <div className="col-md-5  boxSetion ">
        <p className="mt-5 ">{id} </p>
        <h3>{projectName} </h3>
        <p>{details} </p>
        <strong>
          <p>
            <span style={{ color: "yellow" }}>Technologies:</span>{" "}
            {Technologies}{" "}
          </p>
        </strong>
        {noPic && (
          <div className="links text-center">
            <ul>
              <li style={{ display: "inline" }}>
                <a target="_blank" href={github}>
                  <FaGithub style={{ fontSize: "32px" }} />
                </a>
              </li>

              <li style={{ display: "inline" }}>
                <a target="_blank" href={live}>
                  <FaExternalLinkAlt
                    style={{ fontSize: "32px", marginLeft: "15px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleWordCard;
