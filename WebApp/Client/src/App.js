import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

/*function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/source-control/" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}*/

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" Component={Login}/>
          <Route path="/register" Component={Register}/>
          <Route path="/" Component={Home}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
