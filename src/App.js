import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import PriceComparator from "./Comparer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/Home' Component={Home}/>
          <Route path="/Comparator" Component={PriceComparator}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
