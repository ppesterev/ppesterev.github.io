import React, { useState } from "react";
import classnames from "classnames";

function DemosView({ demos }) {
  const [selectedDemo, setSelectedDemo] = useState(null);

  return (
    <section className="demos">
      <h2 className="visually-hidden">Demos</h2>
      <ul className="demos__tab-list">
        {demos.map((demo) => (
          <li className="demos__tab-item">
            <button
              className={classnames("demos__tab", {
                "demos__tab--active": demo === selectedDemo
              })}
              onClick={() => setSelectedDemo(demo)}
            >
              {demo.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="demos__demo-view">
        {selectedDemo ? (
          <iframe
            height="700"
            style="width: 100%;"
            scrolling="no"
            title={selectedDemo.title}
            src={`${selectedDemo.link}?default-tab=js%2Cresult&theme-id=dark`}
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/ppesterev/pen/GRqzweb">listicle</a> by
            Paul (<a href="https://codepen.io/ppesterev">@ppesterev</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        ) : (
          <p>Select a demo</p>
        )}
      </div>
    </section>
  );
}

export default DemosView;
