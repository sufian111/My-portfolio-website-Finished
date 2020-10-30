import React from "react";
import { Link } from "react-router-dom";
import "./NavBarTop.css";
const NavBarTop = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg">
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
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <Link to="/">
              <li class="nav-item">
                <a class="nav-link" href="/">
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
            <Link to="/">
              <button class="btn btn-outline-success">Resume</button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBarTop;