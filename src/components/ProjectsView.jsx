import React from "react";

function ProjectsView({ projects }) {
  return (
    <section className="projects">
      <h2 className="visually-hidden">Projects</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="projects__item" key={project.title}>
            <article className="project">
              <h3 className="project__title">{project.title}</h3>
              <div className="project__content">
                <p className="project__description">{project.description}</p>
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
