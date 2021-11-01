import React from "react";

export default function AboutFooter({ className }) {
  return (
    <div className={`about-footer ${className || ""}`}>
      <span className="about-footer__copy">© 2021 ppesterev</span>
      <a
        href="https://github.com/ppesterev/ppesterev.github.io"
        className="about-footer__link"
        target="_blank"
      >
        This site's source code
      </a>
      <img src="" alt="Personal logo" className="about-footer__logo" />
    </div>
  );
}
