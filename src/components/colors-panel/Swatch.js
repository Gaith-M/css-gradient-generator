import React, { useState } from "react";
import ColorPicker from "../ColorPicker";
import "./swatch.css";
import { Checkboard } from "react-color/lib/components/common";

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
    setDisplay(() => true);
  };

  const closePicker = () => {
    setDisplay(() => false);
  };

  return (
    <div className="swatch">
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
          <i className="fa fa-times" data-id={id}></i>
        </span>
      </div>

      {displayPicker ? (
        <div className="popover">
          <div className="cover" onClick={closePicker} />
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
