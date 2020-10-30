import React from "react";
import { Link } from "react-router-dom";
import "./HeaderSection.css";
import logo from "../../../image/undraw_web_developer_p3e5.svg";
const HeaderSection = () => {
  const locationPath = window.location.pathname;

  return (
    <div>
      <div className="row align-items-center pb-4 pt-3">
        <div className="col-md-6">
          <p className="text-blue">Hello! I am</p>
          <h1>MD Abu Sufian</h1>
          <ul className="text-blue pl-3 d-flex">
            <li className="mr-5">Web Developer</li>
            <li>Programmer</li>
          </ul>
          <p>
            A self-motivated and enthusiastic web developer with a deep interest
            in JavaScript. To work in the Software industry with modern web
            technologies of different local & multinational Software/ IT
            agencies of Bangladesh and grow rapidly with increasing
            responsibilities.
          </p>
          <div className="buttons mt-5">
            {locationPath === "/" && (
              <Link to="/about">
                <button class="btn btn-success mr-4">About Me</button>
              </Link>
            )}
            <Link to="/contact">
              <button class="btn btn-outline-success">Get in touch</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 hero-image">
          {locationPath === "/" && (
            <img
              src="https://i.ibb.co/vvHVLJr/sufian-personal-pic.png"
              alt=""
            />
          )}
          {locationPath === "/about" && <img src={logo} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
