import { useState } from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

let ColorBox= () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [showColor, setShowColor] = useState(false);

  let handleClick = () => {
    const newIndex = Math.floor(Math.random() * colors.length);
    setColorIndex(newIndex);
    setShowColor(!showColor);
  }

  const boxStyle = {
    width: "150px",
    height: "150px",
    border: "1px solid black",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "150px",
    margin: "10px",
    cursor: "pointer",
    backgroundColor: showColor ? colors[colorIndex] : "white"
  };

  return (
    <>
      <div style={boxStyle} onClick={handleClick}>
        {showColor ? colors[colorIndex] : "white"}
      </div>
    </>
  );
}

export default ColorBox;
