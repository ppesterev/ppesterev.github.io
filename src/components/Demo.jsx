import React from "react";

function Demo({ demo }) {
  return (
    demo && (
      <div className="demo">
        <p className="demo__desciption">{demo.description}</p>
        <iframe
          className="demo__display"
          height="700"
          scrolling="no"
          title={demo.title}
          src={`${demo.link}?default-tab=js%2Cresult&theme-id=dark`}
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
      </div>
    )
  );
}

export default Demo;
