import React, {useState} from 'react'
import Menu from "./components/Menu"
import Order from "./components/Order"

const App = () => {
const [menu, setMenu] = useState([
  { name: "Braised Pork", price: 10, quantity: 0 },
  { name: "Lumpia", price: 9, quantity: 0 },
  { name: "Popcorn Chicken", price: 8, quantity: 0 },
  { name: "Pancit Canton", price: 12, quantity: 0 },
  { name: "Three Cup Chicken", price: 12, quantity: 0 },
  { name: "Lechon Kawali", price: 11, quantity: 0 },
  { name: "Mango Shaved Ice", price: 8, quantity: 0 },
  { name: "Ube Leche Flan", price: 8, quantity: 0 }
])

const orderFood = (selectedFood) => {
  menu[selectedFood].quantity = selectedFood.quantity + 1
  console.log(menu[selectedFood])
  setMenu([...menu])
}

  return (
    <>
     <h1>Your Order</h1>
    {menu.map((foodItem, index) => {
      return (
        <>
        <Menu
        foodItem={foodItem} 
        key={index}
        orderFood={orderFood} />
       
        <Order foodItem={foodItem} key={index} />
        
        </>
      )
    })}
    
    
    </>
  )
  
}

export default App