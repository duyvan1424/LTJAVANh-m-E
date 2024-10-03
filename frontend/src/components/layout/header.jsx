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
    <header className="header">
      <nav className="header-nav">
        <div className="header-nav-left">
          <NavLink href="/">LOGO</NavLink>
        </div>
        <div className="header-nav-mid">
          <NavLink to="/" className="nav-link">Trang chủ</NavLink>
          <NavLink to="/service" className="nav-link">
            Dịch vụ
            {/* <ul className='submenu'>
            <li><NavLink className="nav-link">Vận chuyển nội địa</NavLink></li>
            <li><NavLink className="nav-link">Vận chuyển quốc tế</NavLink></li>
          </ul> */}
          </NavLink>

          <NavLink to="/information" className="nav-link">Thông tin</NavLink>
          <NavLink to="/track_order" className="nav-link">Theo dõi đơn hàng</NavLink>
        </div>
        <div className="header-nav-right">
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </div>
      </nav>
    </header>

  )
}

export default Header;
