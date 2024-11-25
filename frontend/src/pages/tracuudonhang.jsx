import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/layout/header';

function getStatusText(status) {
  switch (status) {
    case 0: return "Đang chờ xác nhận";
    case 1: return "Đã đặt hàng";
    case 2: return "Đang giao";
    case 3: return "Đã giao";
    case 4: return "Đã hủy";
    default: return "Trạng thái không xác định";
  }
}

function Tracuu() {
  const [trackingCode, setTrackingCode] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!trackingCode) {
      alert('Vui lòng nhập mã vận đơn.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/api/orders/tracking?code=${trackingCode}`);
      setOrderDetails(response.data);
      setError(null);
    } catch (err) {
      console.error('Lỗi khi lấy thông tin đơn hàng:', err.response || err.message);
      setOrderDetails(null);
      setError('Không tìm thấy thông tin đơn hàng.');
    }
    console.log(orderDetails);
  };

  return (<>
    <Header />
    <div className="min-h-screen bg-gray-100 py-6 px-0">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Quản lý Đơn hàng</h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Nhập mã vận đơn"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tìm Kiếm
          </button>
        </div>


        {error && (
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <p className="text-red-500 text-center font-semibold">{error}</p>
          </div>
        )}

        {orderDetails && (
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Kết quả tìm kiếm:</h2>
            <div className="text-gray-600 text-center items-center">
              <p><strong>Mã Vận Đơn:</strong> {orderDetails.trackingCode}</p>
              <p><strong>Tên Người Gửi:</strong> {orderDetails.senderName}</p>
              <p><strong>Địa Điểm Nhận Hàng:</strong> {orderDetails.receiverAddress}</p>
              <p><strong>Tên Người Nhận:</strong> {orderDetails.receiverName}</p>
              <p><strong>Địa Điểm Giao Hàng:</strong> {orderDetails.senderAddress}</p>
              <p><strong>Số Điện Thoại Người Nhận:</strong> {orderDetails.receiverPhone}</p>
              <p><strong>Trạng Thái Đơn Hàng:</strong> {getStatusText(orderDetails.status)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  );
}

export default Tracuu;
