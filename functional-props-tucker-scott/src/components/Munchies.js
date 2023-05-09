import React from "react"

const Munchies = (props) => {

    const buttonClick = () => {
        props.orderedItemClick(props.item)
    }
    return( 
    <>
        <p> {props.item.name}-{props.item.price}</p>
        <button onClick={buttonClick}>Click to order</button>

    </>
   )
}


export default Munchies 