import react, {useState} from "react"
import Order from "./components/Order"
import Menu from "./components/Menu"

const App = () => {
  const [foods, setFoods] = useState([
    { name: "raw chicken", price: 0.50, ordered: false }, 
    { name: "expired uncrustable", price: 100, ordered: false },
    { name: "moldy string cheese", price: 1000, ordered: false },
    { name: "dry pasta (cronch)", price: 1, ordered: false },
    { name: "dirt-encrusted whole roasted pig", price: 5, ordered: false }
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem);
    foods[selectedItem].ordered = true
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