import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
<<<<<<< HEAD:src/App.js
import PriceComparator from "./Comparer";
import ProfilePage from './Profile';
=======
import Profile from './Profile'
>>>>>>> 53dce2e35a83255410d8492a3ce9ef3d0bd6e0c5:client/src/App.js

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/Home' Component={Home}/>
<<<<<<< HEAD:src/App.js
          <Route path="/Comparator" Component={PriceComparator}/>
          <Route path="/UserProfile" Component={ProfilePage}/>
=======
          <Route path='/Profile' Component={Profile}/>
>>>>>>> 53dce2e35a83255410d8492a3ce9ef3d0bd6e0c5:client/src/App.js
        </Routes>
      </div>
    </Router>
  )
}

export default App
