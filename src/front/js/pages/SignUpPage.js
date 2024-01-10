import React from 'react';
import SignUpForm from '../component/SignUpForm.js';
import '../../styles/authForms.css';

const SignupPage = () => {
  return (
    <div className="form-container">
      <div className="page-title">Signup</div>
      <SignUpForm />
    </div>
  );
};

export default SignupPage;
