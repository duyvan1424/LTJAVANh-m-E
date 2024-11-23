import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Lấy thông tin user từ localStorage
  
  if (!user) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang login
    return <Navigate to="/login" />;
  }

  if (!requiredRole.includes(user.role)) {
    // Nếu vai trò không phù hợp, chuyển hướng đến trang không có quyền
    return <Navigate to="/" />;
  }

  // Nếu hợp lệ, render component con
  return children;
};

export default PrivateRoute;
