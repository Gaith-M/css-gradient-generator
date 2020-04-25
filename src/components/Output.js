import React from "react";
import Highlight from "./Highlight";

const STYLES = {
  minHeight: "20vh",
  padding: "5px",
  margin: "0 5px",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#555",
};
const Output = ({ gradient, gradDegree }) => {
  if (gradient.length <= 1) {
    return <div style={STYLES}></div>;
  }
  return (
    <div style={STYLES}>
      <Highlight
        content={`<pre class='css'><code>background-image: linear-gradient (${gradDegree}% ${gradient});</code></pre>`}
      />
    </div>
  );
};

export default Output;
