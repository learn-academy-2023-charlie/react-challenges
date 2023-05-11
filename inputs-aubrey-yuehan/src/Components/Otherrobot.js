import React from "react";

const OtherRobot = ({userInput}) => {
    const otherArray = userInput.split("")
    const otherEX = otherArray.map((value) => "I think you are over thinking, Brother.")
    return (
        <>
        <h3>Other Robot</h3>
        <p>
            {otherEX}
        </p>
        </>
    )
    }




export default OtherRobot