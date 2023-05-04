import React from "react"


const MenUI = (props) => {
console.log(props);    
      
    
    return(
        <> 
            <p key={props.menuKey}>{props.item.name}</p>
            <br></br>
            {props.item.price}
            <button onClick={() => orderItem(props.index)}> Order here </button>
            {props.item.ordered}
           
           


            {/* <p key={props.key}>{props.item.name}</p>
            {props.item.ordered &&
             <p>You ordered me!</p>
            }
            <button onClick={() => props.orderItem(props.index)}>Ordered</button> */}

        
            {/* <div style={{ border: "2px solid black", height: "300px", width: "200px", marginLeft: "50px"}}>{MenUI}</div> */}




        </>
    )
}


export default MenUI