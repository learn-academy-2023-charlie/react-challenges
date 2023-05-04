// import React, { useState } from "react"

// const Menu = (props) => {
//     const [orderCount, setOrderCount] = useState(0)
//     const orderItem = (index) => {
//         props.item.ordered= true ; 
//         setOrderCount(orderCount + 1);
//     }

//     return (
//         <>
//         <p key={props.menuKey}>{props.item.name}</p>
//         {props.item.ordered && 
//         <p>{orderItem} order coming up</p>
//         }
        
//         <button onClick={() => props.orderItem(props.index)}>Order Here</button>
//         </>
//     )
// }

// export default Menu 

import React, { useState } from "react";

const Menu = (props) => {
  const [orderCount, setOrderCount] = useState(0);

  const orderItem = (index) => {
    const newItem = { ...props.item, ordered: true };
    props.orderItem(newItem, index);
    setOrderCount(orderCount + 1);
  };

  return (
    <>
      <p key={props.menuKey}>{props.item.name}</p>
      {props.item.ordered && <p>{props.item.emoji} order coming up</p>}

      <button onClick={() => orderItem(props.index)}>Order Here</button>
      <p>{orderCount} item(s) ordered</p> 
      <p>Total price ${orderCount *(props.item.price)}</p>
    </>
  );
};

export default Menu;