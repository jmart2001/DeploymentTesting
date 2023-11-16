import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <nav>
                <ul>
                    <a>
                        <Link to="/login">
                        <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
                            Login
                        </button>
                        </Link>
                    </a>
                    <a>
                        <Link to="/register">
                        <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
                            Register
                        </button>
                        </Link>
                    </a>
                </ul>
            </nav>
            <div>
                <h1>Prof</h1>
            </div>
            
        </div>
    )
}

export default Profile