import React from "react"


const BlaBot = ({ userText }) => {
  const changeLetters = (text) => {
    return text.replace({userText}, "b")
  }
  
  return (
    <>
    <h1>BlaBot Bot</h1>
   <p>{changeLetters(userText)}</p>
    </>
  )

  }

export default BlaBot;