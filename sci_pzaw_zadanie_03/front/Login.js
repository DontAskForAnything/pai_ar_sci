import axios from 'axios';
import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (username.trim() !== '' && password.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:8080/pzaw_zadanie_03/auth', {
          firstName: username,
          password: password,
        });
  

        const token = response.data.token;
        console.log(token)
        window.sessionStorage.setItem('token', token);
  
        navigate('/dashboard');
      } catch (error) {
        // Handle authentication failure
        console.error('Authentication failed:', error);
        alert('Authentication failed. Please check your credentials.');
      }
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  return (
<div className="container mt-5">
    <h2 className="text-center mb-2">LOGIN</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Username:</label>
            <input type="text" className="form-control"  value={username}  onChange={(e) => setUsername(e.target.value)} />
        </div>
        
        <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-success mt-2 ">Login</button>
    </form>
</div>
  );
};

export default Login;
