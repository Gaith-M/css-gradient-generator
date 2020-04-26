import React, { useState, useEffect } from "react";
import ColorsPanel from "../components/colors-panel/ColorsPanel";
import Preview from "../components/Preview";
import Settings from "../components/settings/Settings";
import Output from "../components/Output";
import { createGradient, generateColor } from "../functions/functions";
import { v4 as uuidv4 } from "uuid";

const Container = () => {
  const [state, setState] = useState({
    colors: [
      {
        colorId: "c-1",
        colorValue: "rgba(226,112,5, 1)",
        startPos: "",
        endPos: "",
      },
      {
        colorId: "c-2",
        colorValue: "rgba(7,124,178, 1)",
        startPos: "",
        endPos: "",
      },
    ],
  });

  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [deg, setDeg] = useState(45);
  const [gradient, setGradient] = useState(createGradient(state.colors));
  const [fullPreview, togglePreview] = useState(false);

  const togglePreviewMode = () => togglePreview((prevState) => !prevState);

  const changeActiveColor = (e) => {
    let id = e.target.id;
    let condition = (elem) => elem.colorId === id;
    let colorIndex = state.colors.findIndex(condition);

    setActiveColorIndex(() => colorIndex);
  };

  const addNewColor = () => {
    if (state.colors.length >= 10) return;
    const newColor = generateColor();
    setState((prevState) => ({
      colors: [
        ...prevState.colors,
        {
          colorId: uuidv4(),
          colorValue: `rgba(${newColor.r},${newColor.g},${newColor.b}, 1)`,
          startPos: "",
          endPos: "",
        },
      ],
    }));

    setActiveColorIndex(() => state.colors.length);
  };

  const deleteColor = (e) => {
    if (state.colors.length <= 1) return;
    let id = e.target.dataset.id;
    let colorIndex = state.colors.findIndex((elem) => elem.colorId === id);

    setState((prevState) => ({
      ...prevState,
      colors: [
        ...prevState.colors.slice(0, colorIndex),
        ...prevState.colors.slice(colorIndex + 1),
      ],
    }));
    setActiveColorIndex(() => 0);
  };

  const changeColorValue = (color) => {
    setState((prevState) => ({
      ...prevState,
      colors: [
        ...prevState.colors.slice(0, activeColorIndex),
        {
          ...prevState.colors[activeColorIndex],
          colorValue: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
        },
        ...prevState.colors.slice(activeColorIndex + 1),
      ],
    }));
  };

  const controlSliders = (e) => {
    if (state.colors.length <= 1) return;
    const { value, name } = e.target;
    if (name === "deg") {
      setDeg(() => value);
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          colors: [
            ...prevState.colors.slice(0, activeColorIndex),
            {
              ...prevState.colors[activeColorIndex],
              [name]: value,
            },
            ...prevState.colors.slice(activeColorIndex + 1),
          ],
        };
      });
    }
  };

  const clearAllColorPos = () => {
    setState((prevState) => {
      return {
        ...prevState,
        colors: [
          ...prevState.colors.map((color) => ({
            ...color,
            startPos: "",
            endPos: "",
          })),
        ],
      };
    });
  };

  const removeActiveColorPosPoints = () => {
    if (state.colors.length <= 1) return;
    setState((prevState) => {
      return {
        ...prevState,
        colors: [
          ...prevState.colors.slice(0, activeColorIndex),
          {
            ...prevState.colors[activeColorIndex],
            startPos: "",
            endPos: "",
          },
          ...prevState.colors.slice(activeColorIndex + 1),
        ],
      };
    });
  };

  useEffect(() => {
    setGradient(() => createGradient(state.colors));
  }, [state.colors]);

  return (
    <div>
      <div className="colorsPanel_and_preview_container">
        <ColorsPanel
          colors={state.colors}
          activeColorIndex={activeColorIndex}
          changeActiveColor={changeActiveColor}
          addNewColor={addNewColor}
          changeColorValue={changeColorValue}
          deleteColor={deleteColor}
          fullPreview={fullPreview}
        />
        <Preview
          gradient={gradient}
          gradDegree={deg}
          fullPreview={fullPreview}
          togglePreviewMode={togglePreviewMode}
        />
      </div>
      <Settings
        activeColorPoints={{
          start: state.colors[activeColorIndex].startPos,
          end: state.colors[activeColorIndex].endPos,
        }}
        removePoints={removeActiveColorPosPoints}
        clearAllPoints={clearAllColorPos}
        activeColor={state.colors[activeColorIndex].colorValue}
        gradDegree={deg}
        handleChange={controlSliders}
      />
      <Output gradient={gradient} gradDegree={deg} />
    </div>
  );
};

export default Container;
