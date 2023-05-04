
const MenUI = (props) => {
    
      
    
    return(
        <>
            <p key={props.key}>{props.item.name}</p>
            {props.item.ordered &&
             <p>You ordered me!</p>
            }
            <button onClick={() => props.orderItem(props.index)}>Ordered</button>

        
            {/* <div style={{ border: "2px solid black", height: "300px", width: "200px", marginLeft: "50px"}}>{MenUI}</div> */}




        </>
    )
}


export default MenUI