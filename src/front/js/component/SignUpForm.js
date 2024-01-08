import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the backend API
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Handle the response, e.g., redirect on successful signup
    if (response.ok) {
      // Redirect to login or another page
      window.location.href = '/login';
    } else {
      // Handle errors, e.g., display an error message
      console.error('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;