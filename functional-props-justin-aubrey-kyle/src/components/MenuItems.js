// import React from "react"

const MenuItems = (props) => {
    return (
        <>
       <p className = "p"> {props.item.name}
        </p>
        {props.item.ordered && 
        <p className="qty">{(props.item.quantity)}</p> }
        <div className = "tag">
         <button className = "click" onClick = {() => props.orderItems(props.index)}>Quantity</button>
         </div>
        </>
    )
}

export default MenuItems