import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { CONTENT_ROOT, CONTENT_DATA_FILE } from "../config";

import Header from "./Header";
import ProjectsView from "./ProjectsView";
import DemosView from "./DemosView";
import AboutView from "./AboutView";

import { getGHEvents } from "../api/github-events";

function App() {
  const [portfolioData, setPortfolioData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [ghEvents, setGHEvents] = useState([]);

  useEffect(() => {
    fetch(`${CONTENT_ROOT}${CONTENT_DATA_FILE}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPortfolioData(data);
      });
  }, []);

  useEffect(() => {
    getGHEvents()
      .then((actions) => setGHEvents(actions))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main className="clamp-width">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Switch>
            <Route path="/projects">
              <ProjectsView
                projects={portfolioData.projects}
                tagData={portfolioData.tags}
              />
            </Route>
            <Route path="/demos">
              <DemosView demos={portfolioData.demos} />
            </Route>
            <Route path="/about">
              <AboutView ghEvents={ghEvents} />
            </Route>
            <Route to="*">
              <Redirect to="/projects" />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
