const Menu = (props) => {
    return(
        <>
            <p key={props.key}>{props.item.name}</p>
            {props.item.ordered && 
            <p>ew...bad choice! ordered it tho</p>
            }
            <button onClick={() => props.orderItem(props.index)}>Order</button>
        </>
    )
}

export default Menu 