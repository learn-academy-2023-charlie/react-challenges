// imports
import React, {useState} from "react"
import Dice from './components/Dice'
import RollLog from "./components/RollLog"

function App() {
  
  // Psuedocode:
  // Input: none
  // Output: random number within given array (1-6)
  // Function Name: diceRoll
  // calculate random number between 1 and 6 (possible tool: Math.floor and Math.random methods)
  // return random numerical value generated

  const [dice, setDice] = useState("")

  const diceRoll = () => {
    setDice(Math.ceil(Math.random() * 6))
  }

  


  return (<>
   <Dice 
   diceRoll = {diceRoll}
   dice = {dice}
   />
   <RollLog />
  </>)
}

export default App;
