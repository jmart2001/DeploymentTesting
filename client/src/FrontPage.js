import React from 'react';
import { Link } from 'react-router-dom';

function FrontPage() {
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
                <h1>Welcome to What to Cook</h1>
            </div>
        </div>
    )
}

export default FrontPage