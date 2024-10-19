import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'; // Import axios để thực hiện yêu cầu HTTP
import '../styles/register.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault(); // Ngăn chặn reload trang khi submit form
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Tạo đối tượng dữ liệu để gửi
        const userData = {
            username,
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3001/users', userData); // Thay đổi URL cho phù hợp
            console.log(response.data); // Xử lý phản hồi từ API nếu cần
            alert("Registration successful!");
            // Chuyển hướng hoặc thực hiện hành động khác nếu cần
        } catch (error) {
            console.error("There was an error!", error);
            alert("Registration failed! Please try again.");
        }
    };

    return (
        <div>
            <div className="login-container">
                <div className="wrapper">
                    <form onSubmit={handleRegister}>
                        <h1>Register</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // Cập nhật state khi người dùng nhập
                                required
                            />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Cập nhật state khi người dùng nhập
                                required
                            />
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Cập nhật state khi người dùng nhập
                                required
                            />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} // Cập nhật state khi người dùng nhập
                                required
                            />
                            <i className='bx bxs-lock'></i>
                        </div>
                        <div className="agree-condition">
                            <label>
                                <input type="checkbox" /> I agree to the <a href="hi">Terms & Conditions</a>
                            </label>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        <div className="register-link">
                            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
