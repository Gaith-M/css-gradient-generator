import React from "react";
var { Checkboard } = require("react-color/lib/components/common");

const NORMAL_PREVIEW = {
  flex: "2 300px",
  height: "40vh",
  position: "relative",
  margin: "5px",
};

const FULL_PREVIEW = {
  flex: "1 100%",
  position: "relative",
  height: "40vh",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  margin: "5px",
};

const Preview = ({ gradient, gradDegree, fullPreview, togglePreviewMode }) => {
  if (gradient.length <= 1) {
    return (
      <div
        style={{
          ...NORMAL_PREVIEW,
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <p>Please, have at least two colors assigned.</p>
      </div>
    );
  }
  return (
    <div style={fullPreview ? FULL_PREVIEW : NORMAL_PREVIEW}>
      <span className="expandBtn" onClick={togglePreviewMode}>
        <i className="fa fa-expand"></i>
      </span>
      <div
        style={{
          width: "100%",
          height: "40vh",
          backgroundImage: `linear-gradient(${gradDegree}deg, ${gradient})`,
          position: "relative",
          borderRadius: "5px",
          zIndex: 20,
        }}
      />
      <Checkboard style={{ position: "relative", zIndex: 10 }} />
    </div>
  );
};

export default Preview;
