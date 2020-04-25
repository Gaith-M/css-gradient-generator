import React, { useState, useEffect } from "react";
import ColorsPanel from "../components/colors-panel/ColorsPanel";
import Preview from "../components/Preview";
import Settings from "../components/settings/Settings";
import Output from "../components/Output";
import { createGradient, generateColor } from "../functions/functions";
import { v4 as uuidv4 } from "uuid";

const COLORS_P_AND_PREVIEW_STYLES = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const Container = () => {
  const [state, setState] = useState({
    activeColorIndex: 1,
    deg: 165,
    colors: [
      {
        colorId: "c-1",
        colorValue: "rgba(231, 201, 51, 1)",
        startPos: "",
        endPos: "",
      },
      {
        colorId: "c-2",
        colorValue: "rgba(31, 201, 151, 1)",
        startPos: "",
        endPos: "",
      },
    ],
  });

  const [gradient, setGradient] = useState(createGradient(state.colors));

  const [fullPreview, setFullPreview] = useState(false);

  const togglePreviewMode = () => setFullPreview((prevState) => !prevState);

  const changeActiveColor = async (e) => {
    let id = e.target.id;
    let condition = (elem) => elem.colorId === id;
    let colorIndex = state.colors.findIndex(condition);

    await setState((prevState) => ({
      ...prevState,
      activeColorIndex: colorIndex,
    }));
  };

  const addNewColor = async () => {
    if (state.colors.length >= 10) return;
    const newColor = generateColor();
    await setState((prevState) => ({
      ...prevState,
      activeColorIndex: prevState.colors.length,
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
  };

  const deleteColor = async (e) => {
    if (state.colors.length <= 1) return;
    let id =
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .firstElementChild.id;
    let colorIndex = state.colors.findIndex((elem) => elem.colorId === id);

    await setState((prevState) => {
      return {
        ...prevState,
        activeColorIndex: 0,
        colors: [
          ...prevState.colors.slice(0, colorIndex),
          ...prevState.colors.slice(colorIndex + 1),
        ],
      };
    });
  };

  const changeColorValue = async (color) => {
    await setState((prevState) => ({
      ...prevState,
      colors: [
        ...prevState.colors.slice(0, prevState.activeColorIndex),
        {
          ...prevState.colors[prevState.activeColorIndex],
          colorValue: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
        },
        ...prevState.colors.slice(prevState.activeColorIndex + 1),
      ],
    }));
  };

  const controlSliders = async (e) => {
    if (state.colors.length <= 1) return;
    const { value, name } = e.target;
    if (name === "deg") {
      setState((prevState) => {
        return {
          ...prevState,
          deg: value,
        };
      });
    } else {
      await setState((prevState) => {
        return {
          ...prevState,
          colors: [
            ...prevState.colors.slice(0, prevState.activeColorIndex),
            {
              ...prevState.colors[prevState.activeColorIndex],
              [name]: value,
            },
            ...prevState.colors.slice(prevState.activeColorIndex + 1),
          ],
        };
      });
    }
  };

  const clearAllColorPos = async () => {
    await setState((prevState) => {
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

  const removeActiveColorPosPoints = async () => {
    if (state.colors.length <= 1) return;
    await setState((prevState) => {
      return {
        ...prevState,
        colors: [
          ...prevState.colors.slice(0, prevState.activeColorIndex),
          {
            ...prevState.colors[prevState.activeColorIndex],
            startPos: "",
            endPos: "",
          },
          ...prevState.colors.slice(prevState.activeColorIndex + 1),
        ],
      };
    });
  };

  useEffect(() => {
    setGradient(() => createGradient(state.colors));
  }, [state.colors]);

  return (
    <div>
      <div style={COLORS_P_AND_PREVIEW_STYLES}>
        <ColorsPanel
          colors={state.colors}
          activeColorIndex={state.activeColorIndex}
          changeActiveColor={changeActiveColor}
          addNewColor={addNewColor}
          changeColorValue={changeColorValue}
          deleteColor={deleteColor}
          fullPreview={fullPreview}
        />
        <Preview
          gradient={gradient}
          gradDegree={state.deg}
          fullPreview={fullPreview}
          togglePreviewMode={togglePreviewMode}
        />
      </div>
      <Settings
        activeColorPoints={{
          start: state.colors[state.activeColorIndex].startPos,
          end: state.colors[state.activeColorIndex].endPos,
        }}
        removePoints={removeActiveColorPosPoints}
        clearAllPoints={clearAllColorPos}
        activeColor={state.colors[state.activeColorIndex].colorValue}
        gradDegree={state.deg}
        handleChange={controlSliders}
      />
      <Output gradient={gradient} gradDegree={state.deg} />
    </div>
  );
};

export default Container;
