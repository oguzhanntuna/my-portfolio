import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav className="header">
        <ul className="navigation">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="waveContainer">
        <svg
          className="waveSvg"
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
        >
          <path
            className="wavePath"
            d="M-50.78,9.38 C158.01,170.22 309.25,-57.72 503.38,42.92 L500.00,150.00 L-11.84,171.20 Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Header;
