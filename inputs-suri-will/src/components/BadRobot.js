import React from "react"

const BadRobot = ({userInput}) => {

    const badRobotInput = (input) => {
        const strVal = "bla"

        input.split("").map((char) => {
            
        })

        return  input

    }

    return(
    <>
    <div>
    <h2>Bad Robot</h2>
    <p> {badRobotInput(userInput)}</p>
    </div>
    
    </>
    )
}




export default BadRobot