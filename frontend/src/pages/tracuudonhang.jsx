import React from 'react';
import Header from '../components/layout/header';

function Tracuu() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-0">
      <div><Header /></div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Quản lý Đơn hàng</h1>

        {/* Ô tìm kiếm đơn hàng */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Nhập mã vận đơn"
            className="border border-gray-300 rounded-lg p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tìm Kiếm
          </button>
        </div>

        {/* Hiển thị kết quả tìm kiếm */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kết quả tìm kiếm:</h2>
          <div className="text-gray-600 text-center items-center">
            <p><strong>Mã Vận Đơn:</strong> 123456</p>
            <p><strong>Tên Khách Hàng:</strong> John Doe</p>
            <p><strong>Địa Điểm Giao:</strong> 123 Main St, HCM</p>
            <p><strong>Địa Điểm Nhận:</strong> 456 Elm St, HN</p>
            <p><strong>Trạng Thái Đơn Hàng:</strong> Đang giao</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracuu;
