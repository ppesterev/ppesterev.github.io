import React from "react";

import GithubLogPushEvent from "./GithubLogPushEvent";
import GithubLogPREvent from "./GithubLogPREvent";
import GithubLogBranchEvent from "./GithubLogBranchEvent";

export default function GithubLogEvent({ event }) {
  const isPush = event.type === "PushEvent";

  const isPullRequest =
    event.type === "PullRequestEvent" && event.payload.action === "opened";

  const isMerge =
    event.type === "PullRequestEvent" &&
    event.payload.action === "closed" &&
    event.payload.pull_request.merged_by.login === "ppesterev";

  const isBranch =
    event.type === "CreateEvent" && event.payload.ref_type === "branch";

  // event is none of the accepted types
  if ([isPush, isPullRequest, isMerge, isBranch].every((v) => !v)) {
    return;
  }

  // Thu Jan 01 1970 -> [Jan, 01]
  const [month, date] = new Date(event.created_at)
    .toDateString()
    .split(" ")
    .slice(1, 3);

  const [ownerName, repoName] = event.repo.name.split("/");
  const isOwn = ownerName === "ppesterev";
  const repo = {
    url: `https://github.com/${event.repo.name}`,
    label: isOwn ? repoName : event.repo.name
  };

  return (
    <div className="gh-event">
      <time
        className="gh-event__date"
        dateTime={new Date(event.created_at).toISOString()}
      >
        <span className="gh-event__date-number">{date}</span>
        <span className="gh-event__date-month">{month}</span>
      </time>
      {isPush ? (
        <GithubLogPushEvent event={event} repo={repo} />
      ) : isPullRequest ? (
        <GithubLogPREvent event={event} repo={repo} />
      ) : isMerge ? (
        <GithubLogPREvent event={event} repo={repo} isMerge />
      ) : isBranch ? (
        <GithubLogBranchEvent event={event} repo={repo} />
      ) : null}
    </div>
  );
}
