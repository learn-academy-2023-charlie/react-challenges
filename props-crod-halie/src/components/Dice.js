// import
import React from "react"

// functional component declaration
const Dice = ({diceRoll, rollTheDice}) => {
  // console.log(props)
  return(
    <>
      <div className="DiceBox" onClick={rollTheDice}>{diceRoll}</div>
    </>
  )
}

// export
export default Dice