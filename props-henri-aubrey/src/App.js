

import React, {useState} from "react"
import './App.css';


const App =() => {
  const numberList = [ 1, 2, 3, 4, 5, 6 ];

  const [dice, setDice] = useState("Click here to roll the dice")

  const rollDice = () => {
    // const diceRoll = (Math.random() * 
    // numberList.length)  
    const diceRoll = Math.floor(Math.random() * numberList.length)
    setDice(numberList[diceRoll])
  }

  return (
    <>
    <button onClick={rollDice}> {dice} </button>
    
    </>
  )

}


export default App;
