import React from "react";

function Project({ project, tagData }) {
  return (
    <article className="project">
      <h3 className="project__title">{project.title}</h3>
      <div className="project__content">
        <p className="project__description">{project.description}</p>
        <div className="project__tags">
          {project.tags?.map((tag) => (
            <span
              className="project__tag"
              style={{
                color: tagData[tag]?.color || "black",
                backgroundColor: tagData[tag]?.bgColor || "whitesmoke"
              }}
            >
              {tagData[tag]?.text || tag}
            </span>
          ))}
        </div>
        <img
          src="https://via.placeholder.com/200"
          alt=""
          width="200"
          height="200"
          className="project__image"
        />
      </div>
    </article>
  );
}

export default Project;
