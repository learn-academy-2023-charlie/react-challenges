import React, { useState } from "react"
import GoodBot from "./components/GoodBot"
import BadBot from "./components/BadBot"
import KanyeBot5000 from "./components/KanyeBot5000"

const App = () => {
  const [roboText, setRoboText] = useState("")

  const handleChange = (event) => {
    setRoboText(event.target.value)
  }

  return (
    <>
      <h1>Mr. Roboto and Co.</h1>
      <input type="text" onChange={handleChange} /> 
      <GoodBot input={roboText} />
      <BadBot input={roboText} />
      <KanyeBot5000 input={roboText} />
    </>
  )
}
export default App