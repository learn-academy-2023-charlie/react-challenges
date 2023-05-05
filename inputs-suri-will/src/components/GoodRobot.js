import React from "react"


const GoodRobot = ({userInput}) => {

    const goodRobotInput = (input) => {
        return input
    }

    return(
        <>
        <div>
        <h2>Good Robot</h2>
        <p> {goodRobotInput(userInput)}</p>
        </div>
        </>
    )
}





export default GoodRobot