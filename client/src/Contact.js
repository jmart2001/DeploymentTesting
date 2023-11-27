import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where your backend handles email sending
      await axios.post('YOUR_API_ENDPOINT', formData);

      // Clear the form after successful submission
      setFormData({ name: '', email: '', message: '' });

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{textAlign:'center'}}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
<div style={{fontSize:'30px'}}> 
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </div>
    </form>
  );
};

export default Contact;