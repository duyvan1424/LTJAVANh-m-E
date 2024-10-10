import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './header.css';
import logo from "../../assets/logo_nonebackground.png"

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
    <header className="header">
      <nav className="header-nav">
        <NavLink to="/" className="nav-link">
          <div className="header-nav-left">
            <img src={logo} alt="Logo" />
          </div>
        </NavLink>
        <div className="header-nav-mid">
          <NavLink to="/" className="nav-link">TRANG CHỦ</NavLink>
            <a  onClick={handleServiceClick}>DỊCH VỤ</a> {/* Gọi hàm xử lý click */}
          <NavLink to="/information" className="nav-link">THÔNG TIN</NavLink>
          <NavLink to="/track-order" className="nav-link">THEO DÕI ĐƠN HANG</NavLink>
        </div>
        <div className="header-nav-right">
          <NavLink to="/login" className="nav-link">ĐĂNG NHẬP</NavLink>
        </div>
      </nav>
    </header>

  )
}

export default Header;
