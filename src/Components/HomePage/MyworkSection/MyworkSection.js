import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bestWork from "../../Data/Bestworks";
import SingleWordCard from "./SingleWordCard";

const MyworkSection = () => {
  const myBestWork = bestWork;
  const [allBestWork, setAllBestWork] = useState(myBestWork);
  const locationPath = window.location.pathname;
  return (
    <div className="full-container mt-5 pt-5 pb-5">
      {locationPath === "/" && (
        <div className="heading_area mb-5">
          <h2 className="workText">
            <span className="text-blue">Some of my</span> work . . . . . . . . .
            . . . . . . . .
            <span>
              <Link to="/works">
                <button class="btn btn-outline-success btn-sm">
                  All Works
                </button>
              </Link>
            </span>
          </h2>
        </div>
      )}
      {locationPath === "/works" && (
        <div className="heading_area mb-5">
          <h2 className="workText">
            <span className="text-blue">All </span> Projects . . . . . . . . . .
            . . . . . . .
            <span>
              <Link to="/about">
                <button class="btn btn-outline-success btn-sm">About Me</button>
              </Link>
            </span>
          </h2>
        </div>
      )}
      <div className="">
        {locationPath === "/" &&
          allBestWork
            .slice(0, 3)
            .map((work) => <SingleWordCard work={work}></SingleWordCard>)}
        {locationPath === "/works" &&
          allBestWork.map((work) => (
            <SingleWordCard work={work}></SingleWordCard>
          ))}
      </div>
    </div>
  );
};

export default MyworkSection;
