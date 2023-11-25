import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    
    const handleRegistration = async () => {
        Axios.post("http://localhost:3001/users/register", {
            username: usernameReg,
            password: passwordReg,
          }).then((response) => {
            console.log(response.data);
            navigate('/')
          }).catch((error) => {
            console.error(error);
          });
    }

    return (
        <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input 
          type="text" 
          onChange={(e)=> {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text" 
          onChange={(e)=> {
            setPasswordReg(e.target.value);
          }}
        />  
        <button onClick={handleRegistration}>Register</button>      
      </div>
    )
}

export default Register