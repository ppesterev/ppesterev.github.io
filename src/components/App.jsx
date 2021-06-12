import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/projects">
          <h2>Projects</h2>
        </Route>
        <Route path="/demos">
          <h2>Demos</h2>
        </Route>
        <Route path="/about">
          <h2>About</h2>
        </Route>
        <Route to="*">
          <Redirect to="/projects" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
