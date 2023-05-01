import React, { useState } from "react"

const Color = () => {
    const [changeColor, setchangeColor] = useState('black')
    
    const addColor = () => {
        const posColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
        setchangeColor(posColors[Math.floor(Math.random() * posColors.length)])

    }
    return (
        <>
        <h1>Color Changer</h1>
            <div style={{border: "2px solid",height: "50px",width : "50px",backgroundColor:changeColor}}>
            </div>
        <button onClick={addColor}> Change Color</button>
        </>
    ) 
}

export default Color ;

// import React, { useState } from "react"

// const Counter = () => {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count + 1)
//   }

//   return (
//     <>
//       <h1>Counter Application</h1>
//       <p>Counter: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </>
//   )
// }

// export default Counter