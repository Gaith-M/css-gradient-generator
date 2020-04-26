import React from "react";
import "./sliderStyles.css";

const slider_container = {
  width: "100%",
};

const Slider = ({ val, handleChange, name, min, max }) => {
  return (
    <div className={slider_container}>
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
