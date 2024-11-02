import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/register.css';
import Header from '../components/layout/header';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and registration logic here
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="input-box">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="input-box">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input 
                type="password" 
                id="confirm-password" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="register-footer">
              <p>Already have an account? <NavLink to="/login">Login here</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;