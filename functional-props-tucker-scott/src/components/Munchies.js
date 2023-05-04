import React from "react"

const Munchies = () => {
    return( 
    <>
    <p>Food Name: {props.item.name}</p>
    {props.item.price &&<p>Ordered it!</p>}
    <button>Order Some Food</button>
    </>
    )
}


export default Munchies 