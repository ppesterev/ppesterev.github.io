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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quibusdam porro dolorem perspiciatis commodi, quam aliquid error! Nam,
          quas mollitia beatae temporibus omnis, repellendus nobis, distinctio
          cumque repudiandae saepe sunt quaerat error fugiat dolore vel eos!
          Labore sit a nobis veniam? Tempore fuga eos sint ratione minus
          voluptas ipsa enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          neque sed saepe, eius odit exercitationem delectus? Accusamus
          reprehenderit ab dicta!
        </p>
      </div>
      <AboutFooter />
    </section>
  );
}

export default AboutView;
