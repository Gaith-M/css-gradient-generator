import React from "react";
import "./sliderStyles.css";

const SLIDER_CONTAINER = {
  width: "100%",
};

const Slider = ({ val, handleChange, name, min, max }) => {
  return (
    <div style={SLIDER_CONTAINER}>
      <input
        type="range"
        min={min}
        max={max}
        step="1"
        name={name}
        value={val}
        className="slider"
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
