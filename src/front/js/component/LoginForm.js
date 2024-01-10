import React, { useState } from 'react';
import '../../styles/authForms.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the backend API for user login
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    // Handle the response, e.g., save token and redirect on successful login
    if (response.ok) {
      const { access_token } = await response.json();

      // Save the token in sessionStorage
      sessionStorage.setItem('token', access_token);

      // Redirect to /private
      window.location.href = '/private';
    } else {
      // Handle errors, e.g., display an error message
      console.error('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="label">Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
      </div>
      <button type="submit" className="submit-button">Login</button>
    </form>
  );
};

export default LoginForm;