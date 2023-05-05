import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'

const App = () => {
  const [userInput, setuserInput] = useState("")
  
  const handleChange = (event) => {
    setuserInput(event.target.value)
  }
  
  return (
    <>
    <h1 style={{color: "teal"}}>Welcome to our robot app!</h1>
    <input type="text" value={userInput} onChange={handleChange}></input>

    <h3>Good Robot 🤖</h3>
    <GoodRobot userInput={userInput} />
    <h3>Bad Robot 😈</h3>
    <BadRobot userInput={userInput} />
    <h3>Kanyebot 5000 🐻</h3>
    </>
  )
}

export default App