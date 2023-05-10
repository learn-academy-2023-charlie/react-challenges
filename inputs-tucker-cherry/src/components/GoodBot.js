import React from "react"

const GoodBot = (props) => {  

  return (
    <>
      <h3>Good Bot</h3>
      {/* it'd be cool to have our text pop up after we start typing */}
      <p>I hear you saying "{props.input}", is that correct?</p>
    </>
  )
}
  

export default GoodBot
