import React from "react";

function ProjectsView() {
  return (
    <section className="projects">
      <h2 className="visually-hidden">Projects</h2>
      <ul className="projects__list">
        {Array(4)
          .fill(null)
          .map((item, idx) => (
            <li className="projects__item" key={idx}>
              <article className="project">
                <h3 className="project__title">Test project</h3>
                <div className="project__content">
                  <p className="project__description">
                    Test project description
                  </p>
                  <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    width="200"
                    height="200"
                    className="project__image"
                  />
                </div>
              </article>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ProjectsView;
