import React from 'react';
import LoginForm from '../component/LoginForm.js';
import '../../styles/authForms.css';

const LoginPage = () => {
  return (
    <div className="form-container">
      <div className="page-title">Login</div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;