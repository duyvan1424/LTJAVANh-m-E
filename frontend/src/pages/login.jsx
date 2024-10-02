import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../styles/login.css'
import Header from '../components/layout/header';

const LoginPage = () => {

    return (
        <div className="container">
            <div class="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Username" required />
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" required />
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <div class="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot password? </a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    <div class="register-link">
                        <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
                    </div>
                </form >
            </div>

        </div>
    )

}
export default LoginPage;