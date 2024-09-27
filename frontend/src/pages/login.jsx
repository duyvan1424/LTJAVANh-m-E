import React, { useState } from 'react';
import '../styles/login.css'

const LoginPage = () => {

    return (
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
            <p class="register-text">Don't have an account? <a href="#">Register here</a></p>
        </div>
    )

}
export default LoginPage;