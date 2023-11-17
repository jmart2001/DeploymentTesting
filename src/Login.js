import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!usernameLog || !passwordLog) {
            setLoginStatus("Please enter both username and password")
        }

        Axios.post("http://localhost:3001/users/login", {
            username: usernameLog,
            password: passwordLog,
          }).then((response) => {
            console.log(response.data);
            console.log(response.data.message);
            setLoginStatus(response.data.message);
            navigate('/Home')

          }).catch((error) => {
            console.error(error);
            setLoginStatus("Error during login");
          });
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Username ..."
                onChange={(e) => {
                    setUsernameLog(e.target.value);
                }}
            />
            <input 
                type="text" 
                placeholder="Password ..."
                onChange={(e) => {
                    setPasswordLog(e.target.value);
                }}
            />
            <button onClick={handleLogin}>Login</button>
            <div>
                <Link to="/register">Register</Link>
            </div>
            <p className="message">{loginStatus}</p>
        </div>       
    )
}

export default Login;
