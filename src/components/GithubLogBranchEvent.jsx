import React from "react";

import { GitBranch as BranchIcon } from "react-feather";

export default function GithubLogBranchEvent({ event, repo }) {
  return (
    <h4 className="gh-event__desc">
      <BranchIcon className="icon gh-event__icon" />
      Created branch <code>{event.payload.ref}</code> in{" "}
      <a href={repo.url}>{repo.label}</a>
    </h4>
  );
}
