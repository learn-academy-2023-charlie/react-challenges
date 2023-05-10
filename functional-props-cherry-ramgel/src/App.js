import react, {useState} from "react"
import Order from "./components/Order"
import Menu from "./components/Menu"

const App = () => {
  const [foods, setFoods] = useState([
    { name: "raw chicken", price: 0.50, count: 0 }, 
    { name: "expired uncrustable", price: 100, count: 0 },
    { name: "moldy string cheese", price: 1000, count: 0 },
    { name: "dry pasta (cronch)", price: 1, count: 0 },
    { name: "dirt-encrusted whole roasted pig", price: 5, count: 0 }
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem);
    foods[selectedItem].count = foods[selectedItem].count += 1
    setFoods([...foods])
  }
  
  return (
    <>
      <h1>B.F.D.</h1>
      <h5>Bad Food Delivery</h5>
      {foods.map((item, index) => {
        return (
          <Menu item={item} key={index} orderItem={orderItem} index={index} />
        )
      })}
    </>
  )
}

export default App 