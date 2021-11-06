import React from "react";

import GithubLogCommit from "./GithubLogCommit";

export default function GithubLogPushEvent({ event, repo }) {
  if (event.type !== "PushEvent") {
    return;
  }
  const size = event.payload.size;
  const [ownerName, repoName] = event.repo.name.split("/");
  const isOwn = ownerName === "ppesterev";

  return (
    <>
      <h4 className="gh-event__desc">
        {`Created ${size} commit${size > 1 ? "s" : ""} in `}
        <a href={repo.url}>{repo.label}</a>
      </h4>
      <ul className="gh-event__commit-list">
        {event.payload.commits
          .slice()
          .reverse()
          .map((commit) => (
            <li className="gh-event__commit-list-item">
              <GithubLogCommit commit={commit} />
            </li>
          ))}
      </ul>
    </>
  );
}
