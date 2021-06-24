import React, { useState } from "react";

const demosData = ["demo 1", "demo 2", "demo 3"];

function DemosView() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  return (
    <section className="demos">
      <h2 className="visually-hidden">Demos</h2>
      <ul className="demos__tab-list">
        {demosData.map((demo) => (
          <li className="demos__tab-item">
            <button
              className="demos__tab"
              onClick={() => setSelectedDemo(demo)}
            >
              {demo}
            </button>
          </li>
        ))}
      </ul>
      <div className="demos__demo-view">
        {selectedDemo ? <h3>{selectedDemo}</h3> : <p>Select a demo</p>}
      </div>
    </section>
  );
}

export default DemosView;
