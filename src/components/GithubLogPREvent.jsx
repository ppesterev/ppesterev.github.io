import React from "react";

import { GitPullRequest as PRIcon, GitMerge as MergeIcon } from "react-feather";

export default function GithubLogPREvent({ event, repo, isMerge = false }) {
  return (
    <h4 className="gh-event__desc">
      {isMerge ? (
        <MergeIcon className="icon gh-event__icon" />
      ) : (
        <PRIcon className="icon gh-event__icon" />
      )}
      {isMerge ? "Merged" : "Opened"} a{" "}
      <a href={event.payload.pull_request.html_url}>pull request</a> in{" "}
      <a href={repo.url}>{repo.label}</a>
    </h4>
  );
}
