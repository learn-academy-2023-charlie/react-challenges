// import React from "react"

const MenuItems = (props) => {
    return (
        <>
       <p> {props.item.name}
        </p>
        {props.item.ordered && 
        <p>{(props.item.quantity)}</p> }
         <button onClick = {() => props.orderItems(props.index)}>Quantity</button>
        </>
    )
}

export default MenuItems