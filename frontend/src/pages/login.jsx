import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/login.css'
import Header from '../components/layout/header';

const LoginPage = () => {

    return (
        <>
            <Header />
            <div class="login-container">
                <h2>Login</h2>
                <form action="/login" method="post">
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p class="register-text">Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </>
    )

}
export default LoginPage;