import React, {useState} from "react"
import munchies from "./components/Munchies"

const App = () => {
const [foodItems, setfoodItems] = useState ([
    {name : "tacos", price : 5}, 
    {name : "hamburgers", price : 4}, 
    {name : "ChickenSandwhich", price : 4}])
  return(
    const = FoodOrdered 
  <>
  <h1>Scott and Tuckers food truck</h1>
  <h2>Menu</h2>
  {foodItems.map((item, index) => {
    return(
      <Munchies
       item = {item}
       key = {index}

    )
  })

}</>
  )}

export default App