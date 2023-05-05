import React from "react"

const GoodRobot = ({ userInput }) => {
//   const uppercasingUserInput = (input) => {
//     return input.toUpperCase()
  

  return (
    <>
      <h3 className="test3">Good Robot</h3>
      <p>I hear you saying: {(userInput)} Is that correct?</p>
    </>
  )
}

export default GoodRobot