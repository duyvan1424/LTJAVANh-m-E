import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-right">
        <a className="active" href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>

  )
}

export default Header
