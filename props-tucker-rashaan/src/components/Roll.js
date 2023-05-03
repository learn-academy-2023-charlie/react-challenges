import React, {useState} from "react"


const Roll = () =>{
    const [roll, setRoll] = useState(0)
    const [arr, setArr] = useState([])

    const rollDie = () => {
    // const arr = []
    setRoll(Math.floor(Math.random(1) * 7))
    setArr(arr+(roll))
   

}


return<>

<p>Die number </p>
<button onClick = {rollDie} style = {{bordertype: "black", backgroundColor: "yellow", height: "120px", width: "120px"}}> <h2>{roll}</h2> </button>
<h2>{arr}</h2>

</>

}

export default Roll