import React, {useState} from "react"
import MenUI from "./components/MenUI"


const App = () => {
  const[menu, setMenu] = useState([
    {name: "Carne Asada - ", price: 8, ordered: 0},
    {name: "Adobada - ", price: 9, ordered: 0},
    {name: "Pizza - ", price: 17, ordered: 0}, 
    {name: "French Fries - ", price: 6, ordered: 0}
  ])
  

  const orderItem = (newItem, index) => {
    const newMenuItem = [...menu];
    newMenuItem[index] = newItem;
    setMenu(newMenuItem)
  }





  return(
    <>
      <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Ernesto and Henri's</h1>
      <h3 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>The Menu</h3>
      {menu.map((item, index) => {
        return (
          <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          < MenUI item={item} key={index} orderItem={orderItem} index={index} />
          </div>
        )
      })}
    
    
    
    </>
  )
}

export default App
