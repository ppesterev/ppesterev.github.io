import React from "react";

export default function GithubLog({ events }) {
  return (
    <ul className="gh-events">
      {events.map((event) => {
        if (event.type !== "PushEvent") {
          return;
        }
        const size = event.payload.size;
        const repo = event.repo.name;
        return (
          <li className="gh-events__item gh-event">
            {`Created ${size} commits in ${repo}`}
            <ul className="gh-event__list">
              {event.payload.commits.map((commit) => (
                <li className="gh-event__commit">{commit.sha.slice(0, 6)}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
