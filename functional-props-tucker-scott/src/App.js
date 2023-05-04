import React, {useState} from "react"
import Munchies from "./components/Munchies"
import OrderedItems from "./components/OrderedItems"

const App = () => {
const [foodItems, setfoodItems] = useState ([
    {name : "tacos", price :  5}, 
    {name : "hamburgers", price : 4}, 
    {name : "ChickenSandwhich", price : 4}])
  
const [orderedItem, setOrderedItem] = useState ([]) 

const orderedItems = (item) => {
setOrderedItem ([...orderedItem, item])
}
  
  return(
      <>
      <h1>Scott and Tuckers Food Truck</h1>
      <h2>The Menu</h2>
      {foodItems.map((item, index) => {
        return(<>
          <Munchies item={item} key={index} />
          <OrderedItems item={item} key={index}/>
          </>

        )
      })}
     
    </>
  )
}


export default App