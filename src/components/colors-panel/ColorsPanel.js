import React from "react";
import Swatch from "./Swatch";
import "./colorsPanel.css";

const ColorsPanel = ({
  colors,
  activeColorIndex,
  changeActiveColor,
  addNewColor,
  changeColorValue,
  deleteColor,
  fullPreview,
}) => {
  return (
    <div className={fullPreview ? "HIDDEN" : "NORMAL_PREVIEW"}>
      {colors.map((color, i) => {
        if (i === activeColorIndex) {
          return (
            <Swatch
              key={color.colorId}
              id={color.colorId}
              colorVal={color.colorValue}
              active={true}
              changeActiveColor={changeActiveColor}
              changeColorValue={changeColorValue}
              deleteColor={deleteColor}
            />
          );
        }
        return (
          <Swatch
            key={color.colorId}
            id={color.colorId}
            colorVal={color.colorValue}
            active={false}
            changeActiveColor={changeActiveColor}
            changeColorValue={changeColorValue}
            deleteColor={deleteColor}
          />
        );
      })}
      <button onClick={addNewColor} className="addColorBtn">
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
};

export default ColorsPanel;
