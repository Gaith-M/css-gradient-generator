import React from "react";
import Highlight from "./Highlight";
import "../App.css";

//Styles for this component are in App.css
const Output = ({ gradient, gradDegree }) => {
  if (gradient.length <= 1) {
    return <div className="output_styles"></div>;
  }
  return (
    <div className="output_styles">
      <Highlight
        content={`<pre class='css'><code>background-image: linear-gradient (${gradDegree}% ${gradient});</code></pre>`}
      />
    </div>
  );
};

export default Output;
