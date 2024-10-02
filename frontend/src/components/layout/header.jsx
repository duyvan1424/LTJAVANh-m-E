import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="/">LOGO</a>
        <NavLink to="/">Trang chủ</NavLink>
        <NavLink to="/login">Dịch vụ</NavLink>
        <NavLink to="/register">Thông tin</NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>

  )
}

export default Header
