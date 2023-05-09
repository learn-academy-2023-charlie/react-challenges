import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Order from './components/Order'
import Menu from './components/Menu'
import Chicken from './assets/Chicken.jpeg'
import Yogurt from './assets/Yogurt.jpeg'
import Strawberries from './assets/Strawberries.png'
import FiletMignon from './assets/FiletMignon.jpeg'
import Cheese from './assets/Cheese.jpeg'


let totalPrice = 0

const App = () => {
  const [items, setItems] = useState([
    {name: 'Chicken', price: 10, ordered: false, quantity: 0, img: <img src={Chicken} alt="Logo" width="100"/>},
    {name: 'Yogurt', price: 4, ordered: false, quantity: 0, img: <img src={Yogurt} alt="Logo" width="100"/>},
    {name: 'Strawberry', price: 3, ordered: false, quantity: 0, img: <img src={Strawberries} alt="Logo" width="100"/>},
    {name: 'Filet Mignon', price: 50, ordered: false, quantity: 0, img: <img src={FiletMignon} alt="Logo" width="100"/>},
    {name: 'Cheese', price: 2, ordered: false, quantity: 0, img: <img src={Cheese} alt="Logo" width="100"/>},   

  ])

  
  const orderedFood = (selectedFood) => {
    
   
    console.log("this is selctedFood: " + selectedFood) // --> logs the id of the food clicked
    console.log(items[selectedFood]) // --> logs the clicked food object
    console.log(items[selectedFood].ordered) // --> logs the clicked food watched value
    console.log("this is price: " + items[selectedFood].price)
    items[selectedFood].ordered = true // updates the watched value to true
    totalPrice += items[selectedFood].price // updates total price value
    items[selectedFood].quantity += 1
    setItems([...items]) // sets the state to reflect the new changes
  }



  return (
    <>
      <h1>Food Ordering App</h1>
      <p>Your total is: ${(totalPrice * 1.07).toFixed(2)}</p>
      {items.map((item, index) => {
        return (<>
          <Menu 
            item = {item}
            key = {index}
            />
          <Order
            item = {item}
            key = {index}
            orderedFood = {orderedFood}
            index = {index}
          />
            </>
        )
      })}
    </>
  )
}

export default App;
