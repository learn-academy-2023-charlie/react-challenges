import React from "react"

const OrderedItems = (props) => {
    return(
        <>
        <h2>This is your order</h2>
            
            <ul>
                {props.items.map((item,index) => (
                <li key={index}>
                    {props.foodItems.name} - {props.item.price}
                </li>
                ))}
            </ul>
            
        </>
    )
}

export default OrderedItems