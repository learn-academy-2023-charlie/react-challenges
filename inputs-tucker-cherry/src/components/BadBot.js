import React from "react"

const BadBot = (props) => {
  const inOneEar = (input) => {
    input.split("").map((value) => value = "BLA").join("")
    setRoboText(inOneEar)
  }
  
    return (
      <>
      <h3>Bad Bot</h3>
      <p>I hear you saying {inOneEar(props.input)}, is that correct?</p>
      </>
    )
  }
  

export default BadBot