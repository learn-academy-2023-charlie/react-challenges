import React from 'react'

const BadRobot = (props) => {
    const bla = ["b", "l", "a"]
    // const bla = ["b", "l", "a"]
    // return props.userInput.split("").map((value, index) =>  
    //     value.repeat(bla)
    // )
    return props.userInput.split("").map((value, index) =>  
         (value.replace(value, bla).repeat(value.length)
    )).join(" ")

}


export default BadRobot