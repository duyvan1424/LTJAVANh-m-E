import React from 'react';
import Header from '../components/layout/header';

function CheckOrder() {
  return (
    <div className="text-gray-900 bg-red-200">
      <div>
        <Header />
      </div>
      <div className="p-4 flex">
        <h1 className="text-3xl">Quản lý Đơn hàng</h1>
      </div>

      <div className="px-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo Username hoặc Mã Vận Đơn"
          className="border rounded p-2 mb-4 w-full"
        />
      </div>

      <div className="px-3 py-4 flex justify-center">
        <table
          className="w-64 text-md bg-white shadow-md rounded mb-4"
          style={{ minWidth: '1500px' }}
        >
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5 w-1/5">Tên người gửi</th>
              <th className="text-left p-3 px-5 w-1/5">Địa điểm giao</th>
              <th className="text-left p-3 px-5 w-1/5">Tên người nhận</th>
              <th className="text-left p-3 px-5 w-1/5">Địa điểm nhận</th>
              <th className="text-left p-3 px-5 w-1/5">Mã vận đơn</th>
              <th className="text-left p-3 px-5 w-1/5">Note</th>
              <th className="text-left p-3 px-5 w-1/5">Trạng thái đơn hàng</th>
            </tr>
            <tr>
              <td colSpan="7" className="text-center p-3">
                Không có đơn hàng nào.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckOrder;
