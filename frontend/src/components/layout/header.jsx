import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import logo from "../../assets/logo.png";

const Header = ({ scrollToProduct }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false); // State để mở menu user
  const [userRole, setUserRole] = useState(null); // State để lưu trữ role của user
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserRole(user.role); // Lấy role của user từ localStorage
    }
  }, []);

  const handleServiceClick = () => {
    if (location.pathname === '/') {
      scrollToProduct();
    } else {
      navigate('/');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserRole(null); // Reset role khi logout
    navigate('/');
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen); // Bật/tắt menu user
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-white z-50">
      <nav className="flex items-center justify-between h-full px-12">
        <button 
          className="text-black text-3xl lg:hidden"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        
        <NavLink to="/">
          <img className="h-16 ml-4" src={logo} alt="Logo" />
        </NavLink>

        <ul className={`lg:flex ${menuOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mr-6 lg:items-center text-black text-sm transition-all duration-200 lg:static fixed right-0 top-16 w-full lg:w-auto bg-gray-800 lg:bg-transparent`}>
          <li className="text-center lg:inline-block py-4 lg:py-0 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
            <NavLink className="px-5 py-2 block lg:inline-block" to="/">TRANG CHỦ</NavLink>
          </li>
          <li className="text-center lg:inline-block py-4 rounded-2xl lg:py-0 hover:bg-orange-500 transition-colors duration-300">
            <button className="px-5 py-2 block lg:inline-block" onClick={handleServiceClick}>DỊCH VỤ</button>
          </li>
          <li className="text-center lg:inline-block py-4 rounded-2xl lg:py-0 hover:bg-orange-500 transition-colors duration-300">
            <NavLink className="px-5 py-2 block lg:inline-block" to="/information">THÔNG TIN</NavLink>
          </li>
          <li className="text-center lg:inline-block py-4 rounded-2xl lg:py-0 hover:bg-orange-500 transition-colors duration-300">
            <NavLink className="px-5 py-2 block lg:inline-block" to="/track-order">THEO DÕI ĐƠN HÀNG</NavLink>
          </li>

          {isLoggedIn ? (
            // Hiển thị icon user với menu thả xuống khi đăng nhập
            <li className="relative">
              <button onClick={toggleUserMenu} className="flex items-center text-white text-xl focus:outline-none">
                <PersonPinIcon className='bg-black rounded-2xl'/>
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                  <NavLink 
                    to="/user-info" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Thông Tin
                  </NavLink>

                  {/* Render các liên kết quản lý nếu role = 1 */}
                  {userRole === "1" && (
                    <>
                      <NavLink 
                        to="/staff" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Quản lý đơn hàng
                      </NavLink>
                    </>
                  )}
                  {userRole === "2" && (
                    <>
                      <NavLink 
                        to="/quanly" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Quản lý tài khoản
                      </NavLink>
                      <NavLink 
                        to="/staff" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Quản lý đơn hàng
                      </NavLink>
                    </>
                  )}

                  <button 
                    onClick={() => { handleLogout(); setUserMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Đăng Xuất
                  </button>
                </div>
              )}
            </li>
          ) : (
            // Hiển thị nút "Đăng Nhập" khi chưa đăng nhập
            <li className="text-center lg:inline-block py-4 lg:py-0 rounded-2xl hover:bg-orange-500 transition-colors duration-300">
              <NavLink className="px-5 py-2 block lg:inline-block" to="/login">ĐĂNG NHẬP</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
