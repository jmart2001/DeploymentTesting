import "./styles.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Recipes from './pages/Recipes';
import PriceComp from './pages/PriceComp';
import Profile from './pages/Profile';
//npm install react-router-dom

/*function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/source-control/" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}*/

function App() {
  return (
    <Router>
      <div style={{background: 'lemonchiffon'}} className="App">
      <Header/>
        <Routes>
          <Route path="/login" Component={Login}/>
          <Route path="/register" Component={Register}/>
          <Route path="/" Component={Home}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
