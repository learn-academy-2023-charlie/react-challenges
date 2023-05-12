import React, { useState } from "react"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    
    setUserInput(e.target.value)
  }

  return (
    <>
    <h1>ROSCOTT'S ROBOT GAME</h1>
    <h3>Good Robot</h3>
      <input type="text" value={userInput} onChange={handleChange} />
      <p>{userInput}</p>

      <h3>Bad Robot</h3>
      {UserInput((UserInput) => {
        return (
          <BadRobot/>
        )
      }
      <input type="text" value={userInput} onChange={handleChange} />
      <p>{userInput}</p>

      <h3>KanyeBot 5000</h3>
      <input type="text" value={userInput} onChange={handleChange} />
      <p>{userInput}</p>
    </>
  )
}
export default App