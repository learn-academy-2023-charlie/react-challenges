import React from "react";

const BadRobot = ({userInput}) => {
    const badArray = userInput.split("")
    const blaEX = badArray.map((value) => "BLA")
    return (
        <>
        <h3>I am Bad Robot and you are saying </h3>
        <p>
           {blaEX} ?
        </p>
        </>
    )
    }





export default BadRobot

