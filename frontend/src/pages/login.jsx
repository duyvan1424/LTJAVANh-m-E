import React from 'react';
import BasicTextFields from '../components/layout/testField';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import koiBackground from '../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg';
import Header from '../components/layout/header';
import axiosClient from '../apis/axiosClient';

const LoginPage = () => {
  const navigate = useNavigate();

  // Xác thực dữ liệu form với Yup
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Vui lòng nhập email hợp lệ') // Kiểm tra định dạng email
      .required('Vui lòng nhập email'),
    password: yup
      .string()
      .min(6, 'Mật khẩu phải ít nhất 6 ký tự') // Kiểm tra độ dài mật khẩu
      .required('Vui lòng nhập mật khẩu'),
  });

  // Sử dụng Formik để quản lý form
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        
        const response = await axiosClient.get('http://localhost:8080/users', {
          params: {
            email: values.email,
            password: values.password,
          },
        });

        if (response.data.length > 0) {
          const user = response.data[0];
          localStorage.setItem('user', JSON.stringify(user));
          alert('Đăng nhập thành công!');
          navigate('/'); // Chuyển hướng về trang chủ
        } else {
          alert('Tên đăng nhập hoặc mật khẩu không đúng');
        }
      } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        alert('Đã có lỗi xảy ra, vui lòng thử lại sau');
      }
    },
  });

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
          <form onSubmit={formik.handleSubmit} className="login-form">
            <BasicTextFields
              label="Email"
              placeholder="Duong Cao"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required={true}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <BasicTextFields
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required={true}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={formik.isSubmitting} // Disable button khi đang submit
              >
                {formik.isSubmitting ? 'Đang đăng nhập...' : 'Đăng Nhập'}
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
