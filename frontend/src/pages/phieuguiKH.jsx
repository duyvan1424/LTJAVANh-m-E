import React, { useState } from 'react';


function PhieuguiKH() {
    const [info, setInfo] = useState({
        senderName: '',
        senderEmail: '',
        senderPhone: '',
        receiverName: '',
        receiverAddress: '',
        service: false,  
        total: 0,        
        note: ''         
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value; 

        setInfo({
            ...info,
            [name]: newValue  
        });
    };

    const totalFee = info.service ? 500000 : 300000; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Thông tin gửi đi:', { ...info, total: totalFee });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Thông tin gửi hàng cá koi</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
                            Họ và tên người gửi:
                        </label>
                        <input 
                            type="text" 
                            id="senderName" 
                            name="senderName" 
                            value={info.senderName}
                            onChange={handleInputChange}
                            required 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
                            Email người gửi:
                        </label>
                        <input 
                            type="email" 
                            id="senderEmail" 
                            name="senderEmail" 
                            value={info.senderEmail}
                            onChange={handleInputChange}
                            required 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="senderPhone" className="block text-sm font-medium text-gray-700">
                            Số điện thoại người gửi:
                        </label>
                        <input 
                            type="text" 
                            id="senderPhone" 
                            name="senderPhone" 
                            value={info.senderPhone}
                            onChange={handleInputChange}
                            required 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="receiverName" className="block text-sm font-medium text-gray-700">
                            Họ và tên người nhận:
                        </label>
                        <input 
                            type="text" 
                            id="receiverName" 
                            name="receiverName" 
                            value={info.receiverName}
                            onChange={handleInputChange}
                            required 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="receiverAddress" className="block text-sm font-medium text-gray-700">
                            Địa chỉ người nhận:
                        </label>
                        <textarea 
                            id="receiverAddress" 
                            name="receiverAddress" 
                            rows="4" 
                            value={info.receiverAddress}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="service" className="inline-flex items-center">
                            <input 
                                type="checkbox" 
                                id="service" 
                                name="service" 
                                checked={info.service}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <span className="ml-2">Dịch vụ lấy/giao hàng tận nơi</span>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="total-fee" className="block text-sm font-medium text-gray-700">
                            Tổng phí (VNĐ):
                        </label>
                        <input 
                            type="text" 
                            id="total-fee" 
                            name="total-fee" 
                            value={totalFee} 
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                            Ghi chú:
                        </label>
                        <textarea 
                            id="note" 
                            name="note" 
                            rows="4" 
                            value={info.note}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Gửi thông tin
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PhieuguiKH;
