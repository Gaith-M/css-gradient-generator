import React from "react";
import Highlight from "react-highlight";
import "../App.css";

const Output = ({ gradient, gradDegree }) => {
  if (gradient.length <= 1) {
    return <div className="output_styles"></div>;
  }
  return (
    <div className="output_styles">
      <Highlight language="css">
        {`background-image: linear-gradient (${gradDegree}% ${gradient});`}
      </Highlight>
    </div>
  );
};

export default Output;
