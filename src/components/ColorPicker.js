import React from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ colorVal, handleColorChange }) => {
  return (
    <div>
      <ChromePicker color={colorVal} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
