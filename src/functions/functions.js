export const createGradient = (arr) => {
  return arr
    .map((colorObj) => {
      let startPosition = colorObj.startPos ? `${colorObj.startPos}%` : "";
      let endPosition = colorObj.endPos ? `${colorObj.endPos}%` : "";
      return [colorObj.colorValue, startPosition, endPosition];
    })
    .map((colorArr) => colorArr.join(" ").trim());
};

export const generateColor = () => ({
  r: Math.floor(Math.random() * 256),
  g: Math.floor(Math.random() * 256),
  b: Math.floor(Math.random() * 256),
});
