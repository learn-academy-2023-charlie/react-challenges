import React, {useState} from 'react'
import Button from './button'
const Addbox = () => {
  const [boxes, setBoxes] =useState([]);

  const addingBox = () => {
    setBoxes([...boxes, <Button key={boxes.length} />]);
  };
  const rmingBox = () => {
    setBoxes(boxes.slice(0, -1));
  };
  return (
    <>
       <p>{boxes}</p>
       <button onClick={addingBox} >Add a box</button>
       <button onClick={rmingBox} >Remove a box</button>
    </>
  )
}
export default Addbox