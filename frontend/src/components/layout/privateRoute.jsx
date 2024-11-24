import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token'); // Lấy token từ localStorage
  const userRole = localStorage.getItem('role'); // Lấy role từ localStorage

  // Nếu không có token hoặc role không hợp lệ, điều hướng về trang login
  if (!token || !requiredRole.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  // Nếu có token hợp lệ và role hợp lệ, hiển thị children (trang yêu cầu)
  return children;
};

export default PrivateRoute;
