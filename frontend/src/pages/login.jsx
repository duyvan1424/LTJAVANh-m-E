import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Sử dụng để điều hướng sau khi đăng nhập thành công
import axios from 'axios'; // Sử dụng axios để thực hiện yêu cầu HTTP
import '../styles/login.css';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook để điều hướng trang sau khi đăng nhập thành công

    const handleLogin = async (e) => {
        e.preventDefault(); // Ngăn reload trang

        try {
            // Gửi yêu cầu đăng nhập tới API
            const response = await axios.post('http://localhost:3001/login', { username, password });

            // Giả sử API trả về thông tin người dùng hoặc token
            if (response.data) {
                // Lưu thông tin vào localStorage (ví dụ token hoặc thông tin người dùng)
                localStorage.setItem('user', JSON.stringify(response.data));
                alert('Login successful!');
                navigate('/'); // Điều hướng về trang chủ sau khi đăng nhập thành công
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed! Please check your credentials.');
        }
    };

    return (
        <div>
            <div className="login-container">
                <div className="wrapper">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // Cập nhật state khi nhập
                                required
                            />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Cập nhật state khi nhập
                                required
                            />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="/">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
