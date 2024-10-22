import React from 'react';
import BasicTextFields from '../components/layout/testField'; // Sử dụng component BasicTextFields
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'; // Sử dụng axios để thực hiện yêu cầu HTTP


const LoginPage = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  // Xác thực dữ liệu form với Yup
  const validationSchema = yup.object({
    username: yup.string().required('Please input username'),
    password: yup.string().required('Please input password'),
  });

  // Sử dụng Formik để quản lý form
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Thực hiện yêu cầu đăng nhập qua API với axios
        const response = await axios.post('http://localhost:3001/users', {
          username: values.username,
          password: values.password,
        });

        // Kiểm tra phản hồi từ API
        if (response.data) {
          // Lưu thông tin người dùng vào localStorage
          localStorage.setItem('user', JSON.stringify(response.data));
          alert('Login successful!');
          navigate('/'); // Chuyển hướng về trang home sau khi đăng nhập thành công
        }
      } catch (error) {
        alert('Tên đăng nhập hoặc mật khẩu không đúng');
      }
    },
  });

  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
        <h1 className="text-center text-red-600 font-bold text-xl mb-4">Đăng Nhập</h1>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <BasicTextFields
            label="Username"
            placeholder="Duong Cao"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            required={true}
            error={Boolean(formik.touched.username && formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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

          <div className="flex items-center justify-center">
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
  );
};

export default LoginPage;
