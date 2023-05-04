import React, {useState} from "react"
import MenuItems from "./components/MenuItems"

function App() {
  const [menu, setMenu] = useState([
    {name: "Bananas", ordered: false},
    {name: "Peanut Butter", ordered: false},
    {name: "Ice cream", ordered: false},
    {name: "Chocolate Sauce", ordered: false}
  ])
  const orderItems = (selectedItem) => {
    console.log(selectedItem);
    menu[selectedItem].ordered = true
    setMenu ([...menu])
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
    </div>
  );
}

export default App;
