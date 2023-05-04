import React, { useState } from "react"
import Menu from "./components/Menu"
import './App.css';

const App = () => {
  const [menu, setMenu] = useState([
    { name: "Tacos", ordered: false},
    { name: "Pizza", ordered: false},
    { name: "Ramen", ordered: false},
    { name: "Hamburger", ordered: false},
    { name: "Sushi", ordered: false},
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem);
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }
  
  
  return (
    <>
      <h1>Suri and CRod food</h1>
      <h2>Here is the Menu</h2>
      {menu.map((item, index) => {
        return (
      <Menu item={item} key={index} orderItem={orderItem} index={index} />
    )})}
   
      </>
  )
    
}


export default App;
