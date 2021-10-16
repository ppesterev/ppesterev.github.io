const EVENTS_URL = "https://api.github.com/users/ppesterev/events";

const getGHEvents = () => {
  return fetch(EVENTS_URL).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

export { getGHEvents };
