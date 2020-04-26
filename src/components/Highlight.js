import React, { useRef, useEffect } from "react";
import hljs from "highlight.js/lib/highlight";
import "highlight.js/styles/github.css";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("css", css);

function Highlight({ content }) {
  const nodeRef = useRef(null);

  const highlight = () => {
    if (nodeRef) {
      const nodes = nodeRef.current.querySelectorAll("pre");
      nodes.forEach((node) => {
        hljs.highlightBlock(node);
      });
    }
  };

  useEffect(() => {
    highlight();
  });

  return (
    <div
      ref={nodeRef}
      dangerouslySetInnerHTML={{ __html: content }}
      className="highlight"
    />
  );
}

export default Highlight;
