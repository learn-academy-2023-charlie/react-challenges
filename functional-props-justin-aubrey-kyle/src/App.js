import React, {useState} from "react"
import MenuItems from "./components/MenuItems"

function App() {
  const [menu, setMenu] = useState([
    {name: "Bananas", ordered: false, quantity: 0, price: 1.5},
    {name: "Peanut Butter", ordered: false, quantity: 0, price: 3},
    {name: "Ice cream", ordered: false, quantity: 0, price: 5},
    {name: "Chocolate Sauce", ordered: false, quantity: 0, price: 2}
  ])
  
  const orderItems = (selectedItem, quantity) => {
    const updatedMenu = menu.map((item, index) => {
      if (index === selectedItem) {
        return {
          ...item,
          ordered: true,
          quantity: quantity,
          price: item.price
        };
      } else {
        return item;
      }
    });
    setMenu(updatedMenu);
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < menu.length; i++) {
      totalPrice += menu[i].quantity * menu[i].price;
    }
    return totalPrice.toFixed(2);
  }

  return (
    <div>
      <header>Food Ordering App</header>
      <h1>
        Order List
      </h1>
      {menu.map((item,index)=> {
        return (
          <MenuItems item={item} key={index} orderItems={orderItems} index={index}/>
        )
        })}
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
}

export default App;