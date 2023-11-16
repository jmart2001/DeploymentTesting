import "./Header.css";
import PriceComp from "./pages/PriceComp";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
return (
    <a href="/home">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Home
    </button>
    </a>
    );
}

function Recipe() {
return (
    <Link to="/recipes">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Recipe Generator
    </button>
    </Link>
    );
}
function Price() {
return (
    <Link to="/pricecompare">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Price Comparator
    </button>
    </Link>
    );
}
function Prof() {
return (
    <Link to="/profile">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Profile
    </button>
    </Link>
    );
}

function Header() {
    return (
      <header style={{background: 'lemonchiffon'}} className="header">
        <nav>
          <ul className="right">
            <div style={{fontFamily:'cursive', fontSize: '30px'}} className="left">WhatToCook</div>
            <Home/>
            <Recipe/>
            <Price/>
            <Prof/>
          </ul>
        </nav> 
        <div></div>
      </header>
    );
  }

export default Header;
  