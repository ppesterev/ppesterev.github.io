import React from "react";

import AboutHeader from "./AboutHeader";
import GithubLog from "./GithubLog";

function AboutView({ ghEvents }) {
  return (
    <section className="about">
      <h2 className="visually-hidden">About</h2>
      <AboutHeader className="about__header" />
      <GithubLog events={ghEvents} />
    </section>
  );
}

export default AboutView;
