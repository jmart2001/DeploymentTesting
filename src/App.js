import "./styles.css";
import React from 'react';

function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/research/#deliverables" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="App">
      <h2 style={{textAlign: 'center'}}><Header/></h2>
      <h1>Hello Capstone</h1>
      <h2 style={{textAlign: 'center'}}><Capstone/></h2>
      <h2>Hello! Testing the commit 2!</h2>
      <h2>Hello! Testing the commit 3!</h2>
    </div>
  );
}
