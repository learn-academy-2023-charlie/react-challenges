import React, { useState } from "react";

const Box = () => {
  const colors = [
    { name: "white", code: "#FFFFFF" },
    { name: "red", code: "#FF0000" },
    { name: "orange", code: "#FFA500" },
    { name: "yellow", code: "#FFFF00" },
    { name: "green", code: "#008000" },
    { name: "blue", code: "#0000FF" },
    { name: "purple", code: "#800080" },
    { name: "pink", code: "#FFC0CB" }
  ];
  const [color, setColor] = useState(colors[0]);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <center>
      <div className="box" style={{ backgroundColor: color.code }}>
        <h1 style={{ color: color.code, textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}>
          {color.name}
        </h1>
        <h2 style={{ color: color.code }}>{color.code}</h2>
        <button onClick={changeColor}>Alterator</button>
      </div>
    </center>
  );
};

export default Box;
