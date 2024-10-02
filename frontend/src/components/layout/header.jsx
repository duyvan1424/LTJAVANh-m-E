import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './header.css';

const Header = ({ scrollToProduct }) => {
  const location = useLocation(); // Lấy thông tin vị trí hiện tại
  const navigate = useNavigate(); // Để điều hướng giữa các trang

  const handleServiceClick = () => {
    if (location.pathname === '/') {
      // Nếu đang ở trang chủ, cuộn xuống sản phẩm
      scrollToProduct();
    } else {
      // Nếu không, điều hướng về trang chủ 
      navigate('/');
    }
  };

  return (
    <div className="header">
      <div className="header-left">
      <a href="/">LOGO</a>
        <NavLink to="/">Trang chủ</NavLink>
        <a  onClick={handleServiceClick}>Dịch vụ</a> {/* Gọi hàm xử lý click */}
        <NavLink to="/information">Thông tin</NavLink>
        <NavLink to="/track_order">Theo dõi đơn hàng</NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default Header;
