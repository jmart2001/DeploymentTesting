import "./Header.css";
import PriceComp from "./pages/PriceComp";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
return (
    <a href="/">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Home
    </button>
    </a>
    );
}

function Recipe() {
return (
    <Link to="/Recipes">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Recipe Generator
    </button>
    </Link>
    );
}
function Price() {
return (
    <Link to="/PriceComp">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Price Comparator
    </button>
    </Link>
    );
}
function Prof() {
return (
    <Link to="/Prof">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Profile
    </button>
    </Link>
    );
}

function Header() {
    return (
      <header className="header">
        <nav>
          <ul className="right">
            <div style={{fontFamily:'cursive'}}className="left">WhatToCook</div>
            <Home/>
            <Recipe/>
            <Price/>
            <Prof/>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
  