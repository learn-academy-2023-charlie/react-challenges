import React, {useState} from 'react'

const ColorBox = () => {
    const [color, setColor] = useState("white")

    const changeColor = () => {
        setColor("red")
    }
    return(<>
        {/* <p style = {{borderColor:"black", backgroundColor:"red"}}>This is my box</p> */}
       
        <button onClick ={changeColor} style = {{backgroundColor: color, borderColor: "black",width:"100px", height:"100px"}}>White</button>
        </>)
}

export default ColorBox