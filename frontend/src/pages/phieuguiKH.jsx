import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Taodonhang() {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        customer_id: '',
        shipping_address: '',
        order_name_customer: '',
        receiver_name: '',
        order_address: '',
        order_email: '',
        order_date: '',
        order_status: '0',
        tracking_number: '',
        note: '',
        service: false
    });

    // Lấy thông tin người dùng từ localStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setInfo((prevInfo) => ({
                ...prevInfo,
                customer_id: user.id,
                order_name_customer: user.username,
                order_email: user.email
            }));
        } else {
            alert("Vui lòng đăng nhập để tiếp tục.");
            navigate('/login');
        }
    }, [navigate]);

    // Xử lý khi người dùng thay đổi thông tin
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setInfo({
            ...info,
            [name]: newValue
        });
    };

    const totalFee = info.service ? 500000 : 300000;

    // Tạo mã vận đơn ngẫu nhiên
    const generateTrackingNumber = () => {
        return 'ABC' + Math.floor(Math.random() * 1000000000);
    };

    // Hàm xử lý gửi dữ liệu lên server
    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderData = {
            customer_id: info.customer_id,
            shipping_address: info.shipping_address,
            order_name_customer: info.order_name_customer,
            receiver_name: info.receiver_name,
            order_address: info.order_address,
            order_email: info.order_email,
            order_date: new Date().toISOString(),
            order_status: '0',
            tracking_number: generateTrackingNumber(),
            note: info.note,
            ship: totalFee
        };

        try {
            const response = await axios.post('http://localhost:8080/orders', orderData);
            console.log('Order saved:', response.data);
            alert(`Đơn hàng đã được tạo thành công! Mã vận đơn của bạn là: ${orderData.tracking_number}`);

            // Chờ 5 giây rồi chuyển về trang chủ
            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại sau!');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-red-50 to-blue-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Tạo Đơn Hàng Mới</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Họ và tên người gửi:</label>
                        <input 
                            type="text" 
                            name="order_name_customer" 
                            value={info.order_name_customer}
                            readOnly 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email người gửi:</label>
                        <input 
                            type="email" 
                            name="order_email" 
                            value={info.order_email}
                            readOnly
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Địa chỉ người gửi:</label>
                        <input 
                            type="text" 
                            name="order_address" 
                            value={info.order_address}
                            onChange={handleInputChange}
                            required 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Họ và tên người nhận:</label>
                        <input 
                            type="text" 
                            name="receiver_name" 
                            value={info.receiver_name}
                            onChange={handleInputChange}
                            required 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Địa chỉ người nhận:</label>
                        <input 
                            name="shipping_address" 
                            value={info.shipping_address}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            name="service" 
                            checked={info.service}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm font-medium text-gray-700">Dịch vụ lấy/giao hàng tận nơi</label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phí ship (VNĐ):</label>
                        <input 
                            type="text" 
                            value={totalFee} 
                            readOnly
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ghi chú:</label>
                        <textarea 
                            name="note" 
                            rows="3" 
                            value={info.note}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Tạo đơn hàng
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Taodonhang;
