import React from "react"
// import Button from './components/button'
import Addbox from './components/addbox'
import './App.css'

// const App = () => {
//   return (
//     <>
//     <h1 style={{ textAlign: 'center' }}>Random the color!</h1>
//       <br></br>
//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Button/>
//           <Button/>
//           <Button/>
//         </div>
//     </>
//   )
// }

const App = () => {
  return (
    <>
    <h1 style={{ textAlign: 'center' }}>Adding box!</h1>
    <Addbox/>
    </>
  )
}

export default App