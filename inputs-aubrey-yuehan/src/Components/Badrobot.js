import React from "react";

const BadRobot = ({userInput}) => {
    //const newArray = input.split("")
    const badInput = {userInput}.split("").map((value)=>"BLA")
    return (
        <>
        <h3>Bad Robot</h3>
        <p>
            {userInput}
        </p>
        </>
    )
    }




export default BadRobot


//PseudoCode:
//input: {user input}
//output:BLAHBLAH for every character as it's typed
//process: using .map for the userinput array/object, return a different capilized letter for each index 
//.map