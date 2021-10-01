import React from "react";

import { CONTENT_ROOT } from "../config";

function Project({ project, tagData }) {
  return (
    <article className="project">
      <img
        src={`${CONTENT_ROOT}assets/${project.image}`}
        alt={`A screenshot of the ${project.title} live demo`}
        width="600"
        height="800"
        className="project__image"
      />
      <div className="project__text">
        <h3 className="project__title">{project.title}</h3>
        <div className="project__tags">
          {project.tags?.map((tag) => (
            <span
              className="project__tag"
              style={{
                color: tagData[tag]?.color || "black",
                backgroundColor: tagData[tag]?.bgColor
                  ? `${tagData[tag]?.bgColor}80`
                  : "#ffffff80"
              }}
            >
              {tagData[tag]?.text || tag}
            </span>
          ))}
        </div>
        <p className="project__description">{project.description}</p>

        <div className="project__links">
          <a className="project__link" href={project.links.demo}>
            Live demo
          </a>
          <br />
          <a className="project__link" href={project.links.source}>
            Source code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
