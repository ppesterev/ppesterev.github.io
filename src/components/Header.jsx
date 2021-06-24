import React from "react";

import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header clamp-width">
      <h1 className="site-header__title">Neat stuff</h1>
      <p className="site-header__subtitle">A frontend developer's portfolio</p>

      <Navbar className="site-header__nav" />
    </header>
  );
}

export default Header;
