// import React, { useState } from "react"
// import Menu from "./components/Menu"
// import './App.css';

// const App = () => {
//   const [menu, setMenu] = useState([
//     { name: "Tacos", ordered: false},
//     { name: "Pizza", ordered: false},
//     { name: "Ramen", ordered: false},
//     { name: "Hamburger", ordered: false},
//     { name: "Sushi", ordered: false},
//   ])

//   const orderItem = (selectedItem) => {
//     console.log(selectedItem);
//     menu[selectedItem].ordered = true
//     setMenu([...menu])
//   }
  
  
//   return (
//     <>
//       <h1>Suri and CRod food</h1>
//       <h2>Here is the Menu</h2>
//       {menu.map((item, index) => {
//         return (
//       <Menu item={item} key={index} orderItem={orderItem} index={index} />
//     )})}
   
//       </>
//   )
    
// }


// export default App;


import React, { useState } from "react"
import Menu from "./components/Menu"
import './App.css';
import Ordered from "./components/Ordered"

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { name: "Tacos", ordered: false, emoji: "🌮", price: 2},
    { name: "Pizza", ordered: false, emoji: "🍕", price: 10},
    { name: "Ramen", ordered: false, emoji: "🍜", price: 10},
    { name: "Hamburger", ordered: false, emoji: "🍔", price: 7},
    { name: "Sushi", ordered: false, emoji: "🍱", price: 9},
  ])

  const orderItem = (newItem, index) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index] = newItem;
    setMenuItems(newMenuItems);
  };
  
  return (
    <>
      
      <h1>Suri and CRod food</h1>
      <Ordered />
      {menuItems.map((item, index) => {
        return (
      <Menu item={item} key={index} orderItem={orderItem} index={index} />
    )})}
   
      </>
  )
    
}

export default App;
