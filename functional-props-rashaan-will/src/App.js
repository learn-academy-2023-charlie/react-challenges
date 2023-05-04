import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Order from './components/Order'
import Menu from './components/Menu'

const App = () => {
  const [items, setItems] = useState([
    {name: 'Chicken', price: 10, ordered: false},
    {name: 'Yogurt', price: 4, ordered: false},
    {name: 'Strawberry', price: 3, ordered: false},
    {name: 'Fliet Mignon', price: 50, ordered: false},
    {name: 'Cheese', price: 2, ordered: false},   

  ])
  const orderedFood = (selectedFood) => {
    console.log(selectedFood) // --> logs the id of the food clicked
    console.log(items[selectedFood]) // --> logs the clicked food object
    console.log(items[selectedFood].ordered) // --> logs the clicked food watched value
    items[selectedFood].ordered = true // updates the watched value to true
    setItems([...items]) // sets the state to reflect the new changes
  }
  return (
    <>
      <h1>Food Ordering App</h1>
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
            index={index}
          />
            </>
        )
      })}
    </>
  )
}

export default App;
