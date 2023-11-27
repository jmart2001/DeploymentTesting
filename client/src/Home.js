import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import Header from './Header';
import Footer from './Footer';
>>>>>>> c60e6ec0bc497e8fb3f71975dfaeaad204e000c0

function Home() {
    
    return (
<<<<<<< HEAD
        <div>
            <nav>
                <Link to="/profile">Profile</Link>
                <Link to="/DietaryRestrictions">Dietary Restrictions</Link>
            </nav>
            <div>
                <h1>Hello Capstone</h1>
            </div>
=======
        <div style={{textAlign:'center'}}>
            <Header/>
            <div>
                <h1>Welcome to What to Cook</h1>
            </div>
            <Footer/>
>>>>>>> c60e6ec0bc497e8fb3f71975dfaeaad204e000c0
        </div>
    )
}

export default Home