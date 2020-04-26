import React from "react";
import Slider from "./Slider";
import "./settings.css";
import { Checkboard } from "react-color/lib/components/common";

const Settings = ({
  activeColorPoints,
  removePoints,
  activeColor,
  gradDegree,
  clearAllPoints,
  handleChange,
}) => {
  return (
    <div className="container">
      <div className="settings_area">
        <label>
          Gradient Angle:
          <Slider
            val={gradDegree}
            name="deg"
            min="0"
            max="720"
            handleChange={handleChange}
          />
        </label>

        <label>
          Active Color Start :
          <Slider
            handleChange={handleChange}
            val={activeColorPoints.start}
            name="startPos"
            min="0"
            max="100"
          />
        </label>

        <label>
          Active Color End:
          <Slider
            handleChange={handleChange}
            val={activeColorPoints.end}
            name="endPos"
            min="0"
            max="100"
          />
        </label>
        <div className="settingsButtonsHolder">
          <button onClick={clearAllPoints}>
            Remove All Color Position Points
          </button>
          <button onClick={removePoints}>
            Remove Current Color Position Points
          </button>
        </div>
      </div>

      <div className="activeColor">
        <div
          style={{
            background: `${activeColor}`,
          }}
        ></div>
        <Checkboard
          size={14}
          white="#fff"
          grey="#333"
          className="activeColorCheckBoard"
        />
      </div>
    </div>
  );
};

export default Settings;
