import React from "react"

const Munchies = (props) => {
    return( 
    <>
        <p>{props.item.name} {props.item.price}</p>
        <button>Click to order</button>

    </>
   )
}


export default Munchies 