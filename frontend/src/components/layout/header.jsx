import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.png'

const Header = () => {
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

export default Header
