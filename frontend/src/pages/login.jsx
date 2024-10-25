import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/login.css';
import Header from '../components/layout/header';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="login-footer">
              <p><NavLink to="/register">Create an account</NavLink></p>
              <p><NavLink to="/forgot-password">Forgot Password?</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;