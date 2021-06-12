import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Navbar({ className }) {
  return (
    <nav className={classNames(className, "site-nav")}>
      <ul className="site-nav__list">
        <li className="site-nav__item">
          <Link to="/projects" className="site-nav__link">
            Projects
          </Link>
        </li>
        <li className="site-nav__item">
          <Link to="/demos" className="site-nav__link">
            Demos
          </Link>
        </li>
        <li className="site-nav__item">
          <Link to="/about" className="site-nav__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
