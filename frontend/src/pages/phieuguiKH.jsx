import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/header';


function Taodonhang() {
    const [formData, setFormData] = useState({
        senderAddress: "",
        receiverName: "",
        receiverAddress: "",
        receiverPhone: "",
    });

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    var [totalFee, setTotalFee] = useState(""); // Phí ship (VNĐ)
    totalFee = localStorage.getItem("fee");

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedEmail = localStorage.getItem("email");
        if (storedUsername) {
            setUsername(storedUsername);
            setEmail(storedEmail);
        } else {
            alert("Vui lòng đăng nhập để thực hiện thao tác này.");
        }
    }, []);

    // Xử lý thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username) {
            alert("Không thể thực hiện. Username chưa được xác định.");
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:8080/api/orders?username=${username}`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const { trackingCode } = response.data; // Lấy mã vận đơn từ response

            if (trackingCode) {
                alert(`Tạo đơn hàng thành công! Mã vận đơn: ${trackingCode}`);
            } else {
                alert("Tạo đơn hàng thành công nhưng không nhận được mã vận đơn.");
            }
            navigate('/');
            // console.log("Kết quả:", formData);
        } catch (error) {
            console.error("Lỗi khi gửi yêu cầu:", error.response || error.message);
            alert("Có lỗi xảy ra khi tạo đơn hàng.");
        }
    };

    return (
        <>
            <Header></Header>
            <div className="min-h-screen bg-gradient-to-r from-red-50 to-blue-100 flex items-center justify-center">
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Tạo Đơn Hàng Mới</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Họ và tên người gửi:</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email người gửi:</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Địa chỉ người gửi:</label>
                            <input
                                type="text"
                                name="senderAddress"
                                value={formData.senderAddress}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Họ và tên người nhận:</label>
                            <input
                                type="text"
                                name="receiverName"
                                value={formData.receiverName}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Địa chỉ người nhận:</label>
                            <input
                                name="receiverAddress"
                                value={formData.receiverAddress}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="service"
                            checked={formData.service}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm font-medium text-gray-700">Dịch vụ lấy/giao hàng tận nơi</label>
                    </div> */}

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
                                name="receiverPhone"
                                rows="3"
                                value={formData.receiverPhone}
                                onChange={handleInputChange}
                                placeholder="Nhập số điện thoại để nhân viên liên hệ"
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
        </>
    );
}

export default Taodonhang;
