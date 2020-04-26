import React from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ colorVal, handleColorChange }) => (
  <ChromePicker color={colorVal} onChange={handleColorChange} />
);

export default ColorPicker;
