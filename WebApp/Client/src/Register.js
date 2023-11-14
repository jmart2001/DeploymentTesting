// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/register', { username, password, email }, { withCredentials: true });

      if (response.status === 200) {
        alert('Registration successful!');
        // Redirect or perform additional actions on successful registration
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Register;
