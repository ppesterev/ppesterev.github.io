import React from "react";

function App() {
  return (
    <header className="site-header">
      <h1 className="site-header__title">Neat stuff</h1>
      <p className="site-header__subtitle">A frontend developer's portfolio</p>

      <nav className="site-header__nav site-nav">
        <ul className="site-nav__list">
          <li className="site-nav__item">
            <a href="" className="site-nav__link">
              Projects
            </a>
          </li>
          <li className="site-nav__item">
            <a href="" className="site-nav__link">
              Demos
            </a>
          </li>
          <li className="site-nav__item">
            <a href="" className="site-nav__link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
