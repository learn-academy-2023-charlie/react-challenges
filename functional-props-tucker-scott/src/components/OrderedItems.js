import React from "react"

const OrderedItems = (props) => {
    return(
        <>
        <h2>This is your order</h2>
            <p>{item.map((item, index) => {
            {props.item.name} {props.item.price}
            })}</p>
        </>
        )
}

export default OrderedItems