import React from "react";

function Project({ project, tagData }) {
  return (
    <article className="project">
      <h3 className="project__title">{project.title}</h3>
      <p className="project__description">{project.description}</p>
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
      <div className="project__links">
        <a className="project__link" href="https://www.example.com">
          Live demo
        </a>
        <br />
        <a className="project__link" href="https://www.example.com">
          Source code
        </a>
      </div>
      <img
        src="https://via.placeholder.com/600x800"
        alt=""
        width="600"
        height="800"
        className="project__image"
      />
    </article>
  );
}

export default Project;
