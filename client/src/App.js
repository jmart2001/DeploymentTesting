import './App.css';
<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import PriceComparator from "./Comparer";
import ProfilePage from './Profile';
import Profile from './Profile'
import DietaryRestrictions from './DietaryRestrictions'
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import FrontPage from './FrontPage';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';
import Recipes from './Recipes';
import PriceComp from './PriceComp';
import Contact from './Contact';
import About from './About';
//npm install react-router-dom
>>>>>>> c60e6ec0bc497e8fb3f71975dfaeaad204e000c0

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/Home' Component={Home}/>
          <Route path="/Comparator" Component={PriceComparator}/> */
          <Route path="/UserProfile" Component={ProfilePage}/>
          <Route path='/Profile' Component={Profile}/>
          <Route path='/DietaryRestrictions' Component={DietaryRestrictions}/>
        </Routes>
      </div>
    </Router>
  )
=======
      <div style={{background: 'sandybrown'}} className="App">
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
      </div>
    </Router>
  );
>>>>>>> c60e6ec0bc497e8fb3f71975dfaeaad204e000c0
}

export default App
