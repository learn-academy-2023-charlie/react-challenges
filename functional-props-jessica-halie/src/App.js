import React, { useState } from "react"
import Menu from "./components/Menu"


const App = () => {
  const [menu, setMenu] = useState([
    {name: "Taco", price: 2, ordered: false, picture: "🌮"},
    {name: "Chips and Salsa", price: 2, ordered: false, picture: "💃"},
    {name: "Guacamole", price: 3, ordered: false, picture: "🥑"},
    {name: "Rice", price: 1, ordered: false, picture: "🍚"},
    {name: "Burrito", price: 4, ordered: false, picture: "🌯"}
  ])
  const orderedFood = (foodSelected) => {
    menu[foodSelected].ordered = true
    setMenu([...menu])
  }
  return (
    <>
        <h1 style={{color: "maroon"}}>Here's Our Menu:</h1>
        {menu.map((item, index) => {
          return (
            < Menu 
            item = {item}
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
