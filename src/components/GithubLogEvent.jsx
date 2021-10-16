import React from "react";

import GithubLogCommit from "./GithubLogCommit";

export default function GithubLogEvent({ event }) {
  if (event.type !== "PushEvent") {
    return;
  }
  const size = event.payload.size;
  const [ownerName, repoName] = event.repo.name.split("/");
  const isOwn = ownerName === "ppesterev";

  return (
    <div className="gh-event">
      {`Created ${size} commit${size > 1 ? "s" : ""} in `}
      <a href={`https://github.com/${event.repo.name}`}>
        {isOwn ? repoName : event.repo.name}
      </a>
      <ul className="gh-event__commit-list">
        {event.payload.commits.map((commit) => (
          <li className="gh-event__commit-list-item">
            <GithubLogCommit commit={commit} />
          </li>
        ))}
      </ul>
    </div>
  );
}
