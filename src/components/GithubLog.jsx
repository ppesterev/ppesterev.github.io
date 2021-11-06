import React, { useState } from "react";

import GithubLogEvent from "./GithubLogEvent";

export default function GithubLog({ className, events }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedEvents = isExpanded ? events : events.slice(0, 5);

  const acceptedTypes = ["PushEvent", "PullRequestEvent", "CreateEvent"];

  return (
    <div className={`gh-events ${className || ""}`}>
      <h3 className="gh-events__heading">Github activity</h3>
      <ul className="gh-events__list">
        {displayedEvents
          .filter((event) => acceptedTypes.includes(event.type))
          .map((event) => (
            <li className="gh-events__item">
              <GithubLogEvent event={event} />
            </li>
          ))}
      </ul>
      {isExpanded || (
        <button
          type="button"
          className="gh-events__show-more-btn"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
}
