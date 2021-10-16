import React from "react";

import { GitCommit } from "react-feather";

export default function GithubLogCommit({ commit }) {
  return (
    <div className="gh-commit">
      <GitCommit className="icon gh-commit__icon" />
      <span className="gh-commit__sha">{commit.sha.slice(0, 6)}</span>
      <span className="gh-commit__message">{commit.message}</span>
    </div>
  );
}
