import React, { useState } from "react"
import '../App.css'


const Box = () => {
  const [color, setColor] = useState("color")
  return (
  <> 
    <div className="Box"> {color}</div>
  </>
  )
}


export default Box;

