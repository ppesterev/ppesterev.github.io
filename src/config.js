const CONTENT_ROOT =
  process.env.NODE_ENV === "development"
    ? "https://raw.githubusercontent.com/ppesterev/ppesterev.github.io/content-dev/"
    : "https://raw.githubusercontent.com/ppesterev/ppesterev.github.io/content/";
const CONTENT_DATA_FILE = "portfolio-data.json";

export { CONTENT_ROOT, CONTENT_DATA_FILE };
