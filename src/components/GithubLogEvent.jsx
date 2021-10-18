import React from "react";

import GithubLogCommit from "./GithubLogCommit";

export default function GithubLogEvent({ event }) {
  if (event.type !== "PushEvent") {
    return;
  }
  const size = event.payload.size;
  const [ownerName, repoName] = event.repo.name.split("/");
  const isOwn = ownerName === "ppesterev";

  // Thu Jan 01 1970 -> [Jan, 01]
  const [month, date] = new Date(event.created_at)
    .toDateString()
    .split(" ")
    .slice(1, 3);

  return (
    <div className="gh-event">
      <time
        className="gh-event__date"
        dateTime={new Date(event.created_at).toISOString()}
      >
        <span className="gh-event__date-number">{date}</span>
        <span className="gh-event__date-month">{month}</span>
      </time>
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
    </div>
  );
}
