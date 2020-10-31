import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarTop.css";
import { BiAlignLeft } from "react-icons/bi";
const NavBarTop = () => {
  const path = window.location.pathname;

  return (
    <div className="container">
      <nav class="navbar   navbar-expand-lg">
        <a class="navbar-brand" href="/">
          <h1>S</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={{ color: "white" }} class="navbar-toggler-icon">
            <BiAlignLeft style={{ fontSize: "32px" }} />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <Link to="/">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/about">
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
            </Link>
            <Link to="/works">
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  Works
                </a>
              </li>
            </Link>
            <Link to="/blog">
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  Blog
                </a>
              </li>
            </Link>
            <Link to="/contact">
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  Contact
                </a>
              </li>
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1YSAM6WRbnb0CBgehKeBYMQvJLycwSQuK/view"
            >
              <button class="btn btn-outline-success">Resume</button>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBarTop;
