import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-4"> {/* Sử dụng container để căn giữa */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
          {/* Thông tin công ty */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Công ty TNHH ROUTINE VIETNAM</h3>
            <p>
              <a href="https://routine.vn/gioi-thieu-ve-routine" className="hover:underline">
                Giới thiệu về ROUTINE
              </a>
            </p>
            <p>Văn phòng: Tầng 5, Tòa nhà IMC, 62 Trần Quang Khải</p>
          </div>

          {/* Chính sách khách hàng */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Chính sách khách hàng</h3>
            <ul className="list-none">
              <li>
                <a href="/chinh-sach-doi-tra" className="hover:underline">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="/chinh-sach-bao-hanh" className="hover:underline">
                  Chính sách bảo hành
                </a>
              </li>
            </ul>
          </div>

          {/* Thông tin cửa hàng */}
          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-2xl font-bold mb-2">Thông tin cửa hàng</h3>
            <ul className="list-none">
              <li>Cửa hàng 34: Địa chỉ chi tiết</li>
              <li>Cửa hàng 33: Địa chỉ chi tiết</li>
            </ul>
            <a href="/danh-sach-cua-hang" className="text-blue-500 hover:underline">
              Xem tất cả các cửa hàng
            </a>
          </div>
        </div>

        {/* Biểu tượng mạng xã hội */}
        <div className="flex justify-center mt-4">
          <a href="https://facebook.com" className="text-2xl mx-2 text-blue-600 hover:text-blue-800">
            <FacebookIcon />
          </a>
          <a href="https://instagram.com" className="text-2xl mx-2 text-pink-600 hover:text-pink-800">
            <InstagramIcon />
          </a>
        </div>

        {/* Thông tin bản quyền */}
        <div className="text-center mt-2">
          <p>&copy; 2023 ROUTINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
