import React from "react"

const Menu = (props) => {
    return (
        <>
            <p key ={props.key}>{props.item.name}</p>
            <p>{props.item.img}</p>
            <p>Price: ${props.item.price}</p>
        </>
        )
    }

export default Menu
