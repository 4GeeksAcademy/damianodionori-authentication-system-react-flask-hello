import React, { useState, useEffect } from 'react';
import '../../styles/authForms.css';

const Private = () => {
  const [message, setMessage] = useState('Example');

  useEffect( () => {}, [])

  return (
    <div>
        <h1>{message}</h1>
    </div>
  );
};

export default Private;