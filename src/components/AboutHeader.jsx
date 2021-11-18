import React from "react";

import {
  GitHub as GHIcon,
  Mail as MailIcon,
  Phone as PhoneIcon
} from "react-feather";

export default function AboutHeader({ className }) {
  return (
    <div className={`about-header ${className || ""}`}>
      <img
        src={new URL("../img/avatar-gs.jpg", import.meta.url)}
        alt="My photo"
        className="about-header__picture"
      />
      <p className="about-header__name">Pavel Pesterev</p>
      <div className="about-header__links">
        <a href="mailto:p.a.pesterev@gmail.com">
          <MailIcon className="icon" /> p.a.pesterev@gmail.com
        </a>
        <a href="https://github.com/ppesterev" target="_blank">
          <GHIcon className="icon" /> github.com/ppesterev
        </a>
        <a href="tel:+79132082850">
          <PhoneIcon className="icon" /> +7 (913) 208-28-50
        </a>
      </div>
    </div>
  );
}
