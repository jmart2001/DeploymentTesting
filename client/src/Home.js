import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    
    return (
        <div>
            <nav>
                <Link to="/profile">Profile</Link>
                <Link to="/DietaryRestrictions">Dietary Restrictions</Link>
            </nav>
            <div>
                <h1>Hello Capstone</h1>
            </div>
        </div>
    )
}

export default Home