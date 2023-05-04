import React from "react"

const Menu = (props) => {
    return (
        <>
            <p key ={props.key}>Order List: {props.item.name}</p>
            <p>Price: {props.item.price}</p>
        </>
        )
    }

export default Menu
