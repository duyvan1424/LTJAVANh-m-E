import React, { useState } from 'react';
import BasicTextFields from '../components/layout/testField';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/layout/header';
import koiBackground from '../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Điều hướng sau khi đăng nhập thành công

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn form reload trang
    setErrorMessage(''); // Xóa thông báo lỗi trước đó

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });

      // Xử lý khi đăng nhập thành công
      alert('Đăng nhập thành công!');
      const { token, role } = response.data; // Lấy token và role từ backend response
      localStorage.setItem('token', token); // Lưu token vào localStorage
      localStorage.setItem('role', role);   // Lưu role vào localStorage
      console.log(token, role); // Log the token and role for debugging

      navigate('/'); // Điều hướng đến trang Dashboard
    } catch (error) {
      // Xử lý lỗi đăng nhập
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Hiển thị lỗi từ backend
      } else {
        setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại.');
      }
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${koiBackground})`, // Sử dụng background từ utils
      }}
    >
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white bg-opacity-95 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
          <h1 className="text-center text-red-600 font-bold text-xl mb-4">Đăng Nhập</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <BasicTextFields
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <BasicTextFields
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Đăng Nhập
              </button>
            </div>
            {errorMessage && (
              <p className="text-center text-red-500 mt-4">{errorMessage}</p>
            )}
            <p className="text-center mt-4 text-gray-600 text-sm">
              Bạn chưa có tài khoản?{' '}
              <Link to="/register" className="text-red-500 hover:text-red-700 font-bold">
                Đăng ký
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
