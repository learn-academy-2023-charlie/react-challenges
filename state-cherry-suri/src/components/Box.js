import React, { useState } from "react"
import '../App.css'


const Box = () => {
  const [color, setColor] = useState("white")
  
  const handleClick = () => {
    setColor(//figure out how to rotate colors
    )
  }

  return (
  <> 
    <div className="Box" onClick={handleClick}> {color}</div>
  </>
  )
}


export default Box;

