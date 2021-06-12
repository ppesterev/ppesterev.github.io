import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <header className="site-header">
      <h1 className="site-header__title">Neat stuff</h1>
      <p className="site-header__subtitle">A frontend developer's portfolio</p>

      <nav className="site-header__nav site-nav">
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
    </header>
  );
}

export default App;
