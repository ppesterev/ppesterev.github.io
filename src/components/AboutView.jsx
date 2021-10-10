import React from "react";

import { GitHub as GHIcon, Mail as MailIcon } from "react-feather";

function AboutView() {
  return (
    <section className="about">
      <h2 className="visually-hidden">About</h2>
      <div className="about__header about-header">
        <img
          src={new URL("../img/avatar-gs.png", import.meta.url)}
          alt="My photo"
          className="about-header__picture"
        />
        <p className="about-header__name">Pavel Pesterev</p>
        <div className="about-header__links">
          <a href="mailto:p.a.pesterev@gmail.com">
            <MailIcon className="icon" /> p.a.pesterev@gmail.com
          </a>
          <a href="https://github.com/ppesterev">
            <GHIcon className="icon" /> github.com/ppesterev
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutView;
