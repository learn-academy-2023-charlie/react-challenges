import React from "react"

const BadRobot = ({ userInput }) => {
  const blahOutPhrase = (input) => {
    return input.split("").map((char) => {
        return "BLAH";
    }).join(" ")
}

  return (
    <>
      <h3 className ="test2">Bad Robot</h3>
      <p>I hear you saying: {blahOutPhrase(userInput)} Is that correct?</p>
    </>
  )
  }

export default BadRobot