import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './header.css';
import logo from "../../assets/logo_nonebackground.png"

const Header = ({ scrollToProduct }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State để theo dõi trạng thái của menu
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Đổi trạng thái mở/đóng menu
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <label for="" className="checkbtn" onClick={toggleMenu}>&#9776;</label>
        <NavLink>
          <img className="logo" src={logo} alt="" />
        </NavLink>

        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li className="list-item"><NavLink className="nav-link" to="/">TRANG CHỦ</NavLink></li>
          <li className="list-item"><NavLink className="nav-link" onClick={handleServiceClick}>DỊCH VỤ</NavLink></li>
          <li className="list-item"><NavLink className="nav-link" to="/information">THÔNG TIN</NavLink></li>
          <li className="list-item"><NavLink className="nav-link" to="/track-order">THEO DÕI ĐƠN HÀNG</NavLink></li>
          <li className="list-item"><NavLink className="nav-link" to="/login">ĐĂNG NHẬP</NavLink></li>
        </ul>


        {/* <div className="header-nav-mid">
          <NavLink to="/" className="nav-link">TRANG CHỦ</NavLink>
          <NavLink className="nav-link" onClick={handleServiceClick}>DỊCH VỤ</NavLink>
          <NavLink to="/information" className="nav-link">THÔNG TIN</NavLink>
          <NavLink to="/track-order" className="nav-link">THEO DÕI ĐƠN HÀNG</NavLink>
        </div>
        <div className="header-nav-right">
          <NavLink to="/login" className="nav-link">ĐĂNG NHẬP</NavLink>
        </div> */}
      </nav>
    </header >
  )
}

export default Header;
