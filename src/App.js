import "./styles.css";
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import PriceComp from './pages/PriceComp';
import Profile from './pages/Profile';
import React, { useState } from 'react';
//npm install react-router-dom


function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/research/#deliverables" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}

export default function App() {
  return (
    <div style={{background: 'lemonchiffon'}} className="App">\
      <Router><Header/></Router>
      <h1>Hello Capstone</h1>
      <h2 style={{textAlign: 'center'}}><Capstone/></h2>
    </div>
  );
}
