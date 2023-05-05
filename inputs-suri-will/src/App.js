import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeRobot from './components/KanyeRobot'
import React, {useState} from "react"



const App = () => {

  const [userInput, setUserInput] = useState("")

  const handleChange = (event) => {
    setUserInput(event.targetvalue)
  }
  
  return (
    <>
      <h1>Robot Active Listening</h1>
      <input type = "text" onChange = {handleChange} />
      {/* <GoodRobot userInput={userInput} /> */}
    </>
  )

}

export default App;
