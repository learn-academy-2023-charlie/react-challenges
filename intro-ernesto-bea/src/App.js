import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Favorites from './components/Favorites'

function App() {
  return (
    <>
    <Header/>
    <br/>
    <Profile/>
    <br/>
    <Favorites/>
    <br/>
    <Footer/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
