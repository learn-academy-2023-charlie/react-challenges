import React, {useState} from 'react'

const Button = () => {
    const [color, setColor] = useState("white")
    const allColor = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    
   
    const pickColor =() => {
        const randomColorNum = Math.floor(Math.random() * allColor.length)
        const randomColor = allColor[randomColorNum]
        setColor(randomColor)
    }
  return (
    <>
        <button onClick={() => pickColor()} style={{ height: 250 , width: 250 , backgroundColor: color, color: "black" }}>{color}</button>
    </>
  )
}

export default Button