import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/authForms.css';

const Private = () => {
    const [message, setMessage] = useState('Example');
    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchPrivateData = async () => {
          try {
            const token = sessionStorage.getItem('jwt-token');
    
            const resp = await fetch(`/api/private`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
            });
    
            if (!resp.ok) {
              throw new Error('There was a problem in the private request');
            }
    
            const data = await resp.json();
            console.log('This is the data you requested', data);
            setMessage(data.message); // Assuming your response has a "message" property
          } catch (error) {
            console.error(error.message);
    
            navigate.push('/login');
          }
        };
    
        fetchPrivateData();
      }, [navigate]);

  return (
    <div>
        <h1>{message}</h1>
    </div>
  );
};

export default Private;