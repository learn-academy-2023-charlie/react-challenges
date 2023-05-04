import React, { useState } from "react"
const Menu = (props) => {
    return (
        <>
        <p key={props.menuKey}>{props.item.name}</p>
        {props.item.ordered && 
        <p>1 order coming up</p>
        }
        
        <button onClick={() => props.orderItem(props.index)}>Order Here</button>
        </>
    )
}

export default Menu 