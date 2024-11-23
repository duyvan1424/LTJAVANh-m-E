import React from 'react';
import Header from '../components/layout/header';

function StaffOrderManagement() {
  return (
    <div className="text-gray-900 bg-gray-50 min-h-screen">
      <div><Header /></div>
      <div className="p-6 flex justify-center">
        <h1 className="text-4xl font-semibold text-blue-700">Quản lý Đơn hàng</h1>
      </div>

      <div className="px-6">
        <input
          type="text"
          placeholder="Tìm kiếm theo Username hoặc Mã Vận Đơn"
          className="border border-blue-200 rounded-lg p-3 mb-6 w-full shadow focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="px-6 py-4">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-blue-200">
            <tr>
              <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Tên người gửi</th>
              <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Địa Điểm Giao</th>
              <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Tên người nhận</th>
              <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Địa Điểm Nhận</th>
              <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Mã Vận Đơn</th>
              <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Trạng Thái Đơn Hàng</th>
              <th className="text-left p-4 text-gray-700 font-semibold w-1/5"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-100 even:bg-gray-100">
              <td className="p-4 text-gray-700">John Doe</td>
              <td className="p-4 text-gray-700">123 Main St</td>
              <td className="p-4 text-gray-700">Jane Smith</td>
              <td className="p-4 text-gray-700">456 Elm St</td>
              <td className="p-4 text-gray-700">TRK12345</td>
              <td className="p-4">
                <select
                  className="border border-blue-200 rounded p-2 text-gray-700 focus:outline-none focus:border-blue-500"
                >
                  <option value="0">Chờ xác nhận</option>
                  <option value="1">Đã Đặt Hàng</option>
                  <option value="2">Đang Giao</option>
                  <option value="3">Đã Giao</option>
                  <option value="4">Đã Hủy</option>
                </select>
              </td>
              <td className="p-4 flex justify-end">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Lưu
                </button>
              </td>
            </tr>
            <tr className="hover:bg-blue-100 even:bg-gray-100">
              <td className="p-4 text-gray-700">Alice Brown</td>
              <td className="p-4 text-gray-700">789 Oak Ave</td>
              <td className="p-4 text-gray-700">Bob Johnson</td>
              <td className="p-4 text-gray-700">321 Pine St</td>
              <td className="p-4 text-gray-700">TRK67890</td>
              <td className="p-4">
                <select
                  className="border border-blue-200 rounded p-2 text-gray-700 focus:outline-none focus:border-blue-500"
                >
                  <option value="0">Chờ xác nhận</option>
                  <option value="1">Đã Đặt Hàng</option>
                  <option value="2">Đang Giao</option>
                  <option value="3">Đã Giao</option>
                  <option value="4">Đã Hủy</option>
                </select>
              </td>
              <td className="p-4 flex justify-end">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Lưu
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="7" className="text-center p-6 text-gray-500">Không có đơn hàng nào.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffOrderManagement;
