export const createGradient = (arr) => {
  return arr
    .map((colorObj) => {
      let startPosition = colorObj.startPos ? `${colorObj.startPos}%` : "";
      let endPosition = colorObj.endPos ? `${colorObj.endPos}%` : "";
      return [colorObj.colorValue, startPosition, endPosition];
    })
    .map((colorArr) => colorArr.join(" ").trim());
};

export const generateColor = () => {
  let randColor = { r: "", g: "", b: "" };

  randColor.r = Math.floor(Math.random() * 256);
  randColor.g = Math.floor(Math.random() * 256);
  randColor.b = Math.floor(Math.random() * 256);

  return randColor;
};
