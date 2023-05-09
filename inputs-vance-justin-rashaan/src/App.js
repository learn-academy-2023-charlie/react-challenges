import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import './App.css'

const App = () => {
  const [userInput, setuserInput] = useState("")
  
  const handleChange = (event) => {
    setuserInput(event.target.value)
  }
  
  return (
    <>
    <h1 style={{color: "navy", padding: 70, textAlign: 'center' }}>Welcome to our robot app!</h1>
    <input type="text" value={userInput} onChange={handleChange} style={{ padding: 50, textAlign: 'center' }}></input>

    <h3 style={{ padding: 50, textAlign: 'center' }}>Good Robot 🤖</h3>
    <GoodRobot userInput={userInput} />
    <h3 style={{ padding: 50, textAlign: 'center' }}>Bad Robot 😈</h3>
    <BadRobot userInput={userInput} />
    <h3 style={{ padding: 50, textAlign: 'center' }}>Kanyebot 5000 🐻</h3>
    </>
  )
}

export default App