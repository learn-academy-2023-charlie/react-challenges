import React, { useState } from "react"
import './App.css';
import Dice from "./components/Dice"

const App = () => {
  const diceNumbers = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣" ]
  const [diceRoll, setDiceRoll] = useState("click to roll")
  const rollTheDice = () => {
    // use Math.random using the length of the array
    const ranRoll = Math.floor(Math.random() * diceNumbers.length)
    setDiceRoll(diceNumbers[ranRoll])
  }
  return (<>

    <h1>Halie's and Crod Dice roll </h1>
    <Dice rollTheDice={rollTheDice}
        diceRoll={diceRoll} />
    </>
  )
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
