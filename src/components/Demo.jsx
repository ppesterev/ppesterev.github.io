import React, { useState, useEffect, useRef } from "react";

import classNames from "classnames";

function Demo({ demo }) {
  const iframeRef = useRef(null);
  const [isDemoLoaded, setIsDemoLoaded] = useState(false);
  useEffect(() => {
    setIsDemoLoaded(false);

    const onLoad = () => setIsDemoLoaded(true);
    iframeRef.current.addEventListener("load", onLoad);
    return () => iframeRef.current.removeEventListener("load", onLoad);
  }, [demo.link]);

  return (
    demo && (
      <div className={classNames("demo", { "demo--loading": !isDemoLoaded })}>
        {isDemoLoaded || <p>Loading...</p>}
        <iframe
          ref={iframeRef}
          className="demo__display"
          title={demo.title}
          src={`${demo.link}?default-tab=js%2Cresult&theme-id=dark`}
        ></iframe>
      </div>
    )
  );
}

export default Demo;
