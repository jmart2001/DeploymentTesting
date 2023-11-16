import "./styles.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FrontPage from './FrontPage';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Recipes from './pages/Recipes';
import PriceComp from './pages/PriceComp';
import Profile from './pages/Profile';
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
          <Route path="/pages/recipes" Component={Recipes}/>
          <Route path="/pages/pricecompare" Component={PriceComp}/>
          <Route path="/pages/profile" Component={Profile}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
