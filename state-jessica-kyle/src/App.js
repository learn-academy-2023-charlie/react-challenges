import { useState } from "react";


const App() {
const color = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
  const [color, setColor] = useState("color")
const changeColor = () => {
  setColor(color.random())
}
  return (
    <h1>White</h1>
    <button onClick = {changeColor}>Change Color</button>
    
  );
}

export default App;
