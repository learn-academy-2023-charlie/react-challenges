// import React from "react"

const MenuItems = (props) => {
    return (
        <>
        <p key={props.key}>
        {props.item.name}
        </p>
        {props.item.ordered && 
        <p>You ordered me</p>}
         <button onClick = {() => props.orderItems(props.index)}> ordered</button>
        </>
    )
}

export default MenuItems