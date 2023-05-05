import React from "react"

const GoodRobot = ({ userInput }) => {
    console.log(userInput)
    
    
    return (
      <>
        <p>I hear you saying {userInput}. Is that correct?</p>
      </>
    );
  }
  



export default GoodRobot