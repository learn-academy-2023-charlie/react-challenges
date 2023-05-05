import React, {useState} from "react"
import BadRobot from "./components/BadRobot"
import GoodRobot from "./components/GoodRobot"
import Kanyebot from "./components/Kanyebot"



function App() {

  const [userInput, setUserInput] = useState("")

  const handleChange = (event) => {
    setUserInput(event.target.value)

  }

  return (
    <>
      <h1>Funky Robots</h1>
        <p>
          Say Something Here: <input type = "text" value={userInput} onChange={handleChange}/>
        </p>  
      <h4>Good Robot:</h4>
      <GoodRobot userInput = {userInput}/> 
      <h4>Bad Robot:</h4>
      <h4>Kanybot 5000:</h4>
    </>
  )
}

export default App
