//import './App.css';
import "./styles.css";
//import React from 'react'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './pages/Profile'
import FrontPage from './FrontPage';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';
import Recipes from './pages/Recipes';
import PriceComp from './pages/PriceComp';
import Contact from './pages/Contact';
import About from './pages/About';
//npm install react-router-dom

function App() {
  return (
    <Router>
      <div style={{background: 'sandybrown'}} className="App">
      <Header/>
        <Routes>
          <Route path="/login" Component={Login}/>
          <Route path="/register" Component={Register}/>
          <Route path="/" Component={FrontPage}/>
          <Route path="/home" Component={Home}/>
          <Route path="/recipes" Component={Recipes}/>
          <Route path="/pricecompare" Component={PriceComp}/>
          <Route path="/profile" Component={Profile}/>
          <Route path="/contactus" Component={Contact}/>
          <Route path="/about" Component={About}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App
