import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

function Navbar({ className }) {
  return (
    <nav className={classNames(className, "site-nav")}>
      <ul className="site-nav__list">
        <li className="site-nav__item">
          <NavLink
            to="/about"
            className="site-nav__link"
            activeClassName="site-nav__link--active"
          >
            About
          </NavLink>
        </li>
        <li className="site-nav__item">
          <NavLink
            to="/projects"
            className="site-nav__link"
            activeClassName="site-nav__link--active"
          >
            Projects
          </NavLink>
        </li>
        <li className="site-nav__item">
          <NavLink
            to="/demos"
            className="site-nav__link"
            activeClassName="site-nav__link--active"
          >
            Demos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
