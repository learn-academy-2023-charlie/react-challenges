import React from "react"

const Order = (props) => {

    return (
        <>

            
            {props.item.ordered && <p>Ordered!</p>}
            {props.item.ordered && <p> Quanity: {props.item.quantity}</p>}
            <button onClick={() => props.orderedFood(props.index)}>
            Select to Order
            </button>
        </>
        )
    }

export default Order
