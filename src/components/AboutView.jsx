import React from "react";

import AboutHeader from "./AboutHeader";
import GithubLog from "./GithubLog";
import AboutFooter from "./AboutFooter";

function AboutView({ ghEvents }) {
  return (
    <section className="about">
      <h2 className="visually-hidden">About</h2>
      <AboutHeader className="about__header" />
      <GithubLog className="about__sidebar" events={ghEvents} />
      <div className="about__desc">
        <p>
          I have been learning frontend web develoment since 2020, focusing on
          the React framework and the way it fits into the SPA architecture.
          I've come to appreciate the open nature of web development, with open
          source tools as standard and an abundance of freely available learning
          resources.
        </p>
        <p>
          If the examples on this site demonstrate the skills you are looking
          for in a new hire, feel free to contact me via any of the means above.
        </p>
      </div>
      <AboutFooter />
    </section>
  );
}

export default AboutView;
