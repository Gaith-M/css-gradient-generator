import React from "react";
import Swatch from "./Swatch";

const NORMAL_PREVIEW = {
  minHeight: "40vh",
  flex: "1 240px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "start",
  backgroundColor: "#101010",
  padding: "10px",
  margin: "5px",
  borderRadius: "5px",
  boxShadow: "px 2px 4px 2px #404040e6",
};

const HIDDEN = {
  display: "none",
};

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
    <div style={fullPreview ? HIDDEN : NORMAL_PREVIEW}>
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
