import "./Header.css";
import PriceComp from "./pages/PriceComp";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import React, { useState } from 'react';

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
    <a href="/Recipes">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Recipe Generator
    </button>
    </a>
    );
}
function Price() {
return (
    <a href="/PriceCom">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Price Comparator
    </button>
    </a>
    );
}
function Prof() {
return (
    <a href="/Prof">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Profile
    </button>
    </a>
    );
}

function Header() {
    return (
      <header className="header">
        <nav>
          <ul className="right">
            <div className="left">WhatToCook</div>
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
  