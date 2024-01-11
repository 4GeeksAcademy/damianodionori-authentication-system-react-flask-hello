import React from 'react';
import Private from '../component/Private.js';
import '../../styles/authForms.css';

const PrivatePage = () => {
  return (
    <div className="form-container">
      <div className="page-title">Private Area</div>
      <Private />
    </div>
  );
};

export default PrivatePage;