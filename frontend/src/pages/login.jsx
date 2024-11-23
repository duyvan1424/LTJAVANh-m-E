import React from 'react';
import BasicTextFields from '../components/layout/testField';
import { Link } from 'react-router-dom';
import Header from '../components/layout/header';
import koiBackground from '../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg';

const LoginPage = () => {
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
          <form className="login-form">
            <BasicTextFields
              label="Email"
              placeholder="Duong Cao"
              name="email"
            />
            <BasicTextFields
              label="Password"
              type="password"
              name="password"
            />
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Đăng Nhập
              </button>
            </div>
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
