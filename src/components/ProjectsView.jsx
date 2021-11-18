import React from "react";
import Project from "./Project";

function ProjectsView({ projects, tagData }) {
  return (
    <section className="site-section projects">
      <h2 className="visually-hidden">Projects</h2>
      <p className="site-section__desc">
        Complete and reasonably complex apps created as practice projects to
        familiarize myself with various frontend tools and techniques.
      </p>
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="projects__item" key={project.title}>
            <Project project={project} tagData={tagData} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsView;
