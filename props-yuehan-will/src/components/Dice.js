import React from 'react'

const Dice = ({dice, diceRoll}) => { 
    return <button onClick={diceRoll} style = {{backgroundColor: "white", height: 200, width: 200}}>{dice}</button>
}

export default Dice