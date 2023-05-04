import React, {useState} from "react"
import MenUI from "./components/MenUI"


const App = () => {
  const[menu, setMenu] = useState([
    {name: "Carne Asada", price: 8, ordered: false},
    {name: "Adobada", price: 9, ordered: false},
    {name: "Pizza", price: 17, ordered: false}, 
    {name: "French Fries", price: 6, ordered: false}
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem);
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }

  return(
    <>
      <h1>Ernesto and Henri's</h1>
      <h3>The Menu</h3>
      {menu.map((item, index) => {
        return (
          <MenUI item={item} key={index} orderItem={orderItem} index={index} />
        )
      })}
      <MenUI/>
    
    
    
    </>
  )
}

export default App