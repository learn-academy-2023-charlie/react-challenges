import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

    const [dice, setDice] = useState(1);
    const [rolls,setRolls] = useState([])

    const rollDice = () => {
      const randomNumber = Math.ceil(Math.random() * 6);
      setDice(randomNumber);
      setRolls([rolls,randomNumber])
    }
   
  
    return (
      <div className="App">
        <h1>Kerry's Dice Roller</h1>
        <button className="roller" onClick={rollDice}>{dice}</button>
        <p className = "Logger"> previous rolls: {rolls.join("  ")}</p>
      </div>
    );
  }

  
  export default App;
  