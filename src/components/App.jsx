import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
            <ProjectsView />
          </Route>
          <Route path="/demos">
            <DemosView />
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
