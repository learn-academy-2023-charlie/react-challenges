import React, {useState} from 'react'

const ColorBox = () => {

    const [color, setColor] = useState("white")

    const [text, setText] = useState("white")

    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

    const changeColor = () => {
        setColor(colors[Math.floor(Math.random() * colors.length)]) 
        setText(colors[Math.floor(Math.random() * colors.length)])
    }

    return(<>
       
        <button onClick ={changeColor} style = {{backgroundColor: color, borderColor: "black", width:"100px", height:"100px"}}>{text}</button>
        </>)
}

export default ColorBox