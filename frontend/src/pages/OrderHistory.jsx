import React, { useState, useEffect } from 'react';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="order-history">
      <h2>Lịch sử đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Bên nhận</th>
            <th>Điểm gửi</th>
            <th>Điểm nhận</th>
            <th>Tổng phí dịch vụ</th>
            <th>Thu hộ/COD</th>
          </tr>
        </thead>
        <tbody>
          {orders.length ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.recipient} <br /> {order.phone} - {order.location}</td>
                <td>{order.sendPoint}</td>
                <td>{order.receivePoint}</td>
                <td>{order.serviceFee}</td>
                <td>{order.cod}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Không có đơn hàng nào</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;