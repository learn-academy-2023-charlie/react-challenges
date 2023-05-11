import React from "react"

const UglyRobot = ({ userInput }) => {
  const forYonce = (input) => {
    return input.split("").map((char) => {
        return "An AMAZING ENTERTAINER!";
    }).join(" ")

  }
  

  return (
    <>
      <h3 className="test">Ugly Robot</h3>
      <p> I'm gonna let you finnish, but Beyonce is: {forYonce(userInput)}</p>
    </>
  )
}

export default UglyRobot