import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>

  )
}

export default Header
