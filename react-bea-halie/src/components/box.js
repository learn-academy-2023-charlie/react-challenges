import React, { useState } from "react";

const colorful = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

const Box = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white')
  const randomColors = () => {
    return Math.floor(Math.random([colorful]) * colorful.length)
  }
return (
<div
      style={{
        backgroundColor: backgroundColor,
        width: '150px',
        height: '150px',
        border: 'solid black',
        margin: 'auto',
        display: 'inline-block',
        padding: '1px',
        textAlign: 'center',
        fontSize: '20px',
        justifyContent: 'center'
      }}
      onClick={() => {
        const colorIndex = randomColors();
        setColorIndex(colorIndex);
        setBackgroundColor(colorful[colorIndex]);
      }}
   
    ></div>
)
}
export default Box