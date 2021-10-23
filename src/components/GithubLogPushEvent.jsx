import React from "react";

import GithubLogCommit from "./GithubLogCommit";

export default function GithubLogPushEvent({ event }) {
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
        <a href={`https://github.com/${event.repo.name}`}>
          {isOwn ? repoName : event.repo.name}
        </a>
      </h4>
      <ul className="gh-event__commit-list">
        {event.payload.commits.reverse().map((commit) => (
          <li className="gh-event__commit-list-item">
            <GithubLogCommit commit={commit} />
          </li>
        ))}
      </ul>
    </>
  );
}
