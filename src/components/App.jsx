import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import portfolioData from "../config.json";

import Header from "./Header";
import ProjectsView from "./ProjectsView";
import DemosView from "./DemosView";

function App() {
  return (
    <>
      <Header />
      <main className="clamp-width">
        <Switch>
          <Route path="/projects">
            <ProjectsView projects={portfolioData.projects} />
          </Route>
          <Route path="/demos">
            <DemosView demos={portfolioData.demos} />
          </Route>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route to="*">
            <Redirect to="/projects" />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
