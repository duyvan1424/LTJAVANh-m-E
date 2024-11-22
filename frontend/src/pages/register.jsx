import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicTextFields from '../components/layout/testField';
import koiBackground from '../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg';
import Header from '../components/layout/header';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const role = 0; // Role mặc định là 0

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData = {
      username,
      email,
      password,
      role, // Thêm role mặc định
    };

    try {
      const existingUser = await axios.get(`http://localhost:8080/users?username=${username}`);
      if (existingUser.data.length > 0) {
        alert('Username already exists! Please choose a different one.');
        return;
      }

      const response = await axios.post('http://localhost:8080/users', userData);
      console.log(response.data);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Registration failed! Please try again.');
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${koiBackground})`,
      }}
    >
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white bg-opacity-95 text-black shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
          <h1 className="text-center text-red-600 font-bold text-xl mb-4">Register</h1>
          <form onSubmit={handleRegister}>
            <BasicTextFields
              label="Username"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />
            <BasicTextFields
              label="Email"
              placeholder="Enter your email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <BasicTextFields
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <BasicTextFields
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
            />

            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
            <p className="text-center mt-4 text-gray-600 text-sm">
              Already have an account?{' '}
              <NavLink to="/login" className="text-red-500 hover:text-red-700 font-bold">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
