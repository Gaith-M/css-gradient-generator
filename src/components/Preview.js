import React from "react";
import { Checkboard } from "react-color/lib/components/common";
import "../App.css";

const Preview = ({ gradient, gradDegree, fullPreview, togglePreviewMode }) => {
  if (gradient.length <= 1) {
    return (
      <div className="normal_preview tip_preview">
        <p>Please, have at least two colors assigned.</p>
      </div>
    );
  }
  return (
    <div className={fullPreview ? "full_preview" : "normal_preview"}>
      <span className="expandBtn" onClick={togglePreviewMode}>
        <i className="fa fa-expand"></i>
      </span>
      <div
        style={{
          backgroundImage: `linear-gradient(${gradDegree}deg, ${gradient})`,
        }}
        className="preview_window"
      />
      <Checkboard />
    </div>
  );
};

export default Preview;
