import React, { useState, useEffect } from 'react';
import './OrderHistory.css';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/orders')  // Removed unused second parameter
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching orders. Please try again later.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="order-history"><h2>Loading...</h2></div>;
    }

    if (error) {
        return <div className="order-history"><h2>{error}</h2></div>;
    }

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
                    orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.recipient} <br /> {order.phone} - {order.location}</td>
                            <td>{order.sendPoint}</td>
                            <td>{order.receivePoint}</td>
                            <td>{order.totalServiceFee}</td>
                            <td>{order.cod}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">No orders found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;