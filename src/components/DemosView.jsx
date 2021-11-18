import React, { useState } from "react";
import classnames from "classnames";

import Demo from "./Demo";

function DemosView({ demos }) {
  const [selectedDemo, setSelectedDemo] = useState(null);

  return (
    <section className="site-section">
      <h2 className="visually-hidden">Demos</h2>
      <p className="site-section__desc">
        Interactive demonstrations of some frontend techniques that are short
        and simple enough to be embedded on this page.
      </p>
      <div className="demos">
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
                {demo === selectedDemo ? (
                  <p className="demos__tab-desc">{demo.description}</p>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
        <div className="demos__demo-view">
          {selectedDemo ? (
            <Demo demo={selectedDemo} />
          ) : (
            <p className="demos__placeholder-text">Select a demo</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default DemosView;
