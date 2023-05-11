import React, {useState} from "react"
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"
import UglyRobot from "./components/UglyRobot"


const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <>
      <h3 className="bot">Listening Robot</h3>
      <center>
      <input type="text" onChange={handleChange} />
      <GoodRobot userInput={userInput}  />
      <BadRobot userInput={userInput} />
      <UglyRobot userInput={userInput} />
      </center>

    </>
  )
}

export default App
