import React, {useState} from "react"
import MenuItems from "./components/MenuItems"

const App = () => {
  const [menu, setMenu] = useState([
    {name: "Bananas $1.58/item", ordered: false, quantity: 0, price: 1.58},
    {name: "Peanut Butter $3.32/item", ordered: false, quantity: 0, price: 3.32},
    {name: "Ice cream $5.76/item", ordered: false, quantity: 0, price: 5.76},
    {name: "Chocolate Sauce $2.98/item", ordered: false, quantity: 0, price: 2.98}
  ])
  
  const orderItems = (selectedItem) => {
    console.log(selectedItem);
    menu[selectedItem].ordered = true
    menu[selectedItem].quantity += 1
    setMenu([...menu])
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < menu.length; i++) {
      totalPrice += (menu[i].quantity * menu[i].price);
    }
    return totalPrice;
  }

  let totalTax = (getTotalPrice() * 0.20)
  // const totalCost = totalTax + getTotalPrice()

  return (
    <div>
      <header>Food Ordering App</header>
      <h1>
        Order List
      </h1>
      {menu.map((item,index)=> {
        return (
          <MenuItems item={item} key={index} orderItems={orderItems} index={index} price={getTotalPrice}/>
        )
        })}
      <p>Total Price: ${getTotalPrice()}</p>
      <p>Total Price with Tax: ${((getTotalPrice() + totalTax).toFixed(2))}</p>
    </div>
  );
}

export default App;