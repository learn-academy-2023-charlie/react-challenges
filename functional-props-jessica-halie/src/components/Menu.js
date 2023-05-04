import React from "react";

const Menu = (props) => {

    return (
        <>
        <p>{props.item.name}{props.item.picture}</p>
        <p>Price: ${props.item.price}</p>
        {props.item.ordered && <p style={{color: "purple"}}>Added to Order!</p>}
        <button style={{backgroundColor: "lilac"}}onClick ={() => props.orderedFood(props.index)} >Add to Order!</button>

        </>
    )
}



export default Menu