import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/layout/header';

function StaffOrderManagement() {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Hàm gọi API để lấy đơn hàng
  const fetchOrders = async (query = "") => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/orders", {
        params: { search: query },
      });
      setOrders(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu đơn hàng:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(searchQuery);
  }, [searchQuery]);

  const updateOrderStatus = async (trackingCode, newStatus) => {
    try {
      await axios.put(`http://localhost:8080/api/orders/${trackingCode}`, {
        status: newStatus,
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.trackingCode === trackingCode ? { ...order, status: newStatus } : order
        )
      );
      alert("Thay đổi trạng thái thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái:", error);
    }
  };

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-blue-200 rounded-lg p-3 mb-6 w-full shadow focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="px-6 py-4">
        {loading ? (
          <div className="text-center text-gray-500">Đang tải...</div>
        ) : (
          <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-blue-200">
              <tr>
                <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Tên người gửi</th>
                <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Địa Điểm Lấy Hàng</th>
                <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Tên người nhận</th>
                <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Địa Điểm Gửi Hàng</th>
                <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Mã Vận Đơn</th>
                <th className="text-left p-4 text-gray-700 font-semibold w-1/5">Trạng Thái Đơn Hàng</th>
                <th className="text-left p-4 text-gray-700 font-semibold w-1/5"></th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.trackingCode} className="hover:bg-blue-100 even:bg-gray-100">
                    <td className="p-4 text-gray-700">{order.senderName}</td>
                    <td className="p-4 text-gray-700">{order.senderAddress}</td>
                    <td className="p-4 text-gray-700">{order.receiverName}</td>
                    <td className="p-4 text-gray-700">{order.receiverAddress}</td>
                    <td className="p-4 text-gray-700">{order.trackingCode}</td>
                    <td className="p-4">
                      <select
                        className="border border-blue-200 rounded p-2 text-gray-700 focus:outline-none focus:border-blue-500"
                        value={order.status}
                        onChange={(e) => {
                          setOrders((prevOrders) =>
                            prevOrders.map((o) =>
                              o.trackingCode === order.trackingCode
                                ? { ...o, status: parseInt(e.target.value, 10) }
                                : o
                            )
                          );
                        }}
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
                        onClick={() => updateOrderStatus(order.trackingCode, order.status)}
                      >
                        Lưu
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">Không có đơn hàng nào.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default StaffOrderManagement;
