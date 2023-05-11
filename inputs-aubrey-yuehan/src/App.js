import React, { useState } from 'react'
import GoodRobot from "./Components/Goodrobot"
import BadRobot from "./Components/Badrobot"
import OtherRobot from "./Components/Otherrobot"
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("")
  const badInput = userInput.split("")  
  const handleChange = (event) => {
  setUserInput(event.target.value)
  console.log(event.target.value)

  }
  return (<>
  <h1>Robot Talk</h1>
  <input type="text" onChange={handleChange}/>
  <GoodRobot userInput={userInput}/>
  <BadRobot userInput={userInput} badInput={badInput}/>
  <OtherRobot userInput={userInput}/>

  </>
  )
}

export default App;
