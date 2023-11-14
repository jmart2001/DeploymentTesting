import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1>Hello Capstone</h1>
                <h2>Here is my codebase!</h2>
                <h2>Here is another commit</h2>
                <h2>Here is a link to the Capstone website</h2>
                <h2>Hello! Testing the commit 2!</h2>
                <h2>Hello! Testing the commit 3! Merge Conflict! Justin</h2>
                <h2>Testing if deployment works!</h2>
            </div>
        </div>
    )
}

export default Home