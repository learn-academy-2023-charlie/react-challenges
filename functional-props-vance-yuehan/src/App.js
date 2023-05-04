import React, {useState} from 'react'
import Menu from "./components/Menu"

let totalPrice = 0
const totalTax = 1.1

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
  console.log(selectedFood) // --> logs the id of the movie clicked
  console.log(menu[selectedFood]) // --> logs the clicked movie object
  console.log(menu[selectedFood].quantity + 1) // --> logs the clicked movie watched value
  menu[selectedFood].quantity += 1 // updates the watched value to true
  totalPrice += menu[selectedFood].price
  setMenu([...menu]) // sets the state to reflect the new changes
}

  return (
    <>
     <h1>V & Y Taiwanese and Filipino Cuisine</h1>
      {menu.map((foodItem, index) => {
        return (
          <>
          <Menu
          foodItem={foodItem} 
          key={index}
          orderFood={orderFood} 
          index={index}
          setMenu={setMenu}
          />
        
          
          
          </>
        )
        })}
      <h3>Your order total with tax: $ {(totalPrice * totalTax).toFixed(2) }
      </h3>
    
    </>
  )
  
}

export default App