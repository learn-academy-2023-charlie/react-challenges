import React, {useState} from 'react'
import './App.css';

const Box = () => {
  const [color, setColor] = useState("white")
  const colorChange = () => {
    setColor(color)
  }
  // <button onClick = {addMiles} style = 
  // {{background-color:"purple", color:"blue"}
// > add a mile} </button>
  return (
    <>
      <h1>Color Box</h1>
      <div className="box">
        <p>
          White</p>
      </div>
      <p><button type="button">Color-name</button></p>
      

    
    </>
  )





}
export default Box