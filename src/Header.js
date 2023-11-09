import "./styles.css";
import React, { useState } from 'react';

function Home() {
return (
    <a href="/" target="_blank">
    <button style={{fontSize: '15px'}}n>
        Home
    </button>
    </a>
    );
}
function Recipe() {
return (
    <a href="/RepGen" target="_blank">
    <button style={{fontSize: '15px'}}n>
        Recipe Generator
    </button>
    </a>
    );
}
function Price() {
return (
    <a href="/PriCom" target="_blank">
    <button style={{fontSize: '15px'}}n>
        Price Comparator
    </button>
    </a>
    );
}
function Profile() {
return (
    <a href="/Prof" target="_blank">
    <button style={{fontSize: '15px'}}n>
        Profile
    </button>
    </a>
    );
}

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <header className="header">
        <div style = {{textAlign: 'left'}} className="logo">WhatToCook</div>
        <nav className="nav">
          <ul style = {{textAlign: 'right', size: '15px'}} className="nav-list">
            <Home/>
            <Recipe/>
            <Price Comparator/>
            <Profile/>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
  