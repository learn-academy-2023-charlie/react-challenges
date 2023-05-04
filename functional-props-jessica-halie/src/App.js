import React, { useState } from "react"
import Menu from "./components/Menu"



const App = () => {
  const [menuitems, setMenuitems] = useState([
    // name of the state: menu
    // setMenu = setter method, all changes will HAVE to occur via setState. The function that is used to update our state. 
    // useState = accepts an initial state and returns two values: the current state and a function that updates the state
    {name: "Taco", price: 2, ordered: false, picture: "🌮"},
    {name: "Chips and Salsa", price: 2, ordered: false, picture: "💃"},
    {name: "Guacamole", price: 3, ordered: false, picture: "🥑"},
    {name: "Rice", price: 1, ordered: false, picture: "🍚"},
    {name: "Burrito", price: 4, ordered: false, picture: "🌯"}
  ])

  
  const orderedFood = (foodSelected) => {
    menuitems[foodSelected].ordered = true
// This function named orderedFood is taking in the value of the    setMenu([...menu])


  }
  return (
   
    <>
   
        <h1 style={{color: "pink", alignItems: 'center'}}> Halie & Jessica's Taco Palace</h1>
        <h2 style={{color: "maroon"}}>MENU:</h2>
        {menuitems.map((item, index) => {
          //iterating through the array of objects and passing the paramaters of the object: value and index into the nested Menu component
          return (
            
            < Menu 
            // each of the below are prop name = {javaScript}
            
            item = {item}
            // Each item is the value of one whole object in the array/state menuitems
            key = {index}
            orderedFood = {orderedFood}
            index = {index}
            />
           
           
          )
        })}

    </>
    
  )
}
export default App;
