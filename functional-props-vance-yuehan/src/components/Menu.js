import React from 'react'

const Menu = (props) => {
    return (
        <>
            <p>
                {props.foodItem.name}
                <br/>
                Price   ${props.foodItem.price} <br/>
                x {props.foodItem.quantity}
            </p>
            <button onClick={() =>
            props.orderFood(props.index)}> Order Meeee! </button>
        </>
    )
}

export default Menu