//import "./Header.css";
import PriceComp from "./pages/PriceComp";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
return (
    <a href="/contactus">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Contact Us
    </button>
    </a>
    );
}

function About() {
return (
    <Link to="/about">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        About
    </button>
    </Link>
    );
}

function Footer() {
    return (
      <header style={{background: 'sienna'}} className="header">
        <nav>
          <ul className="right">
            <div style={{fontFamily:'cursive', fontSize: '30px'}} className="left">WhatToCook</div>
            <ContactUs/>
            <About/>
          </ul>
        </nav> 
        <ul style={{color: 'sienna ', fontSize: '15px'}}>
          Space
        </ul>
      </header>
    );
  }

export default Footer;
  