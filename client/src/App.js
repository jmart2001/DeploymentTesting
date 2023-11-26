import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import DietaryRestrictions from './DietaryRestrictions'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/Home' Component={Home}/>
          <Route path='/Profile' Component={Profile}/>
          <Route path='/DietaryRestrictions' Component={DietaryRestrictions}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
