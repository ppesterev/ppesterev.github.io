import React from "react";
import Project from "./Project";

function ProjectsView({ projects, tagData }) {
  return (
    <section className="projects">
      <h2 className="visually-hidden">Projects</h2>
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
