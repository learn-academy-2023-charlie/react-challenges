const Menu = (props) => {
    return(
        <>
            <p key={props.key}>{props.item.name}  ${props.item.price}</p>
            <p>ew...bad choice! ordered it tho: {props.item.count}</p>
            <button onClick={() => props.orderItem(props.index)}>Order</button>
        </>
    )
}

export default Menu