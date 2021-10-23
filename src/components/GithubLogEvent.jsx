import React from "react";

import GithubLogPushEvent from "./GithubLogPushEvent";

export default function GithubLogEvent({ event }) {
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
      <GithubLogPushEvent event={event} />
    </div>
  );
}
