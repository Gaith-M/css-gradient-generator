import React from "react";
import Slider from "./Slider";
var { Checkboard } = require("react-color/lib/components/common");

const STYLES = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  minHeight: "30vh",
};

const SETTINGS_AREA = {
  flex: "1 400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "5px",
  padding: "5px",
};

const ACTIVE_COLOR = {
  flex: "1 140px",
  position: "relative",
  margin: "5px",
  height: "30vh",
  borderRadius: "5px",
};

const Settings = ({
  activeColorPoints,
  removePoints,
  activeColor,
  gradDegree,
  clearAllPoints,
  handleChange,
}) => {
  return (
    <div style={STYLES}>
      <div style={SETTINGS_AREA}>
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

      <div className="activeColor" style={ACTIVE_COLOR}>
        <div
          style={{
            borderRadius: "5px",
            background: `${activeColor}`,
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            zIndex: "100",
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
