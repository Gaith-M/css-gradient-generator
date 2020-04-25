import React, { useState } from "react";
import ColorPicker from "../ColorPicker";
import "./swatch.css";
var { Checkboard } = require("react-color/lib/components/common");

const SWATCH_STYLE = {
  width: 70,
  height: 50,
  padding: 1,
  margin: 5,
  display: "flex",
  justifyContent: "space-between",
  borderRadius: 5,
};

const OVERLAY_STYLES = {
  popover: {
    position: "absolute",
    zIndex: "200",
  },
  cover: {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  },
};

const Swatch = ({
  id,
  colorVal,
  active,
  changeActiveColor,
  changeColorValue,
  deleteColor,
}) => {
  const [displayPicker, setDisplay] = useState(false);

  const openPicker = () => {
    setDisplay((prevState) => !prevState);
  };

  const closePicker = () => {
    setDisplay(() => false);
  };

  return (
    <div className="swatch" style={SWATCH_STYLE}>
      <div
        className="colorContainer"
        style={{ border: active ? "3px solid #fff" : "3px solid #ccc" }}
        onClick={openPicker}
      >
        <div
          className="color"
          style={{ backgroundColor: colorVal }}
          id={id}
          onClick={changeActiveColor}
        ></div>
        <Checkboard size={7} white="#fff" grey="#333" className="checkBoard" />
      </div>
      <div className="close">
        <span onClick={deleteColor}>
          <i className="fa fa-times"></i>
        </span>
      </div>

      {displayPicker ? (
        <div style={OVERLAY_STYLES.popover}>
          <div style={OVERLAY_STYLES.cover} onClick={closePicker} />
          <ColorPicker
            colorVal={colorVal}
            handleColorChange={changeColorValue}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Swatch;
