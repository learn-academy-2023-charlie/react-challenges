
import React, { useState } from "react"
import YeBot from './components/YeBot'
import Goodbot from './components/GoodBot'
import BlaBot from './components/BlaBot'


const App = () => {
  const [userText, setUserText] = useState("")

  const handleChange = (event) => { 
    setUserText(event.target.value) 
  }
  return (
    <>
    <h1>Jessica and CRod Robot listener</h1>
    <p>Type Something</p>
    <p><input type="text" onChange={handleChange} /></p>
    <Goodbot userText={userText}/>
    <YeBot userText={userText}/>
    <BlaBot userText={userText}/>
    </>
    
  )
}

export default App;
