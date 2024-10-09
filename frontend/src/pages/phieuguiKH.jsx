import React from 'react'
import '..styles/PhieuguiKH.css'

function PhieuguiKH() {
    const [info, setInfo] = useState({
        address: '',       // địa chỉ giao
        service: false,// chọn giao hàng tận nơi
        total: 0    // tổng chi phí
    });
    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value; // cập nhật thay đổi của checkbox(chọn giao hàng tận nơi)
    
        setInfo({
          ...info,
          [name]: newValue  // lưu giá trị mới vào trường name tương ứng
        });
      };
    
    const handleSubmit = () => {// gửi thông tin đến cho nhân viên
        console.log('Thông tin gửi đi:', info);
      };

return (
    <div>
        
        <div className="container"></div>

        <div className="form-container">
        <h1>Thông tin gửi hàng cá koi</h1>

        <form action="#" method="post">
            <label for="sender-name">Họ và tên người gửi:</label>
            <input type="text" id="sender-name" name="sender-name" required />

            <label for="sender-email">Email người gửi:</label>
            <input type="email" id="sender-email" name="sender-email" required />

            <label for="sender-phone">Số điện thoại người gửi:</label>
            <input type="text" id="sender-phone" name="sender-phone" required />

            <label for="receiver-name">Họ và tên người nhận:</label>
            <input type="text" id="receiver-name" name="receiver-name" required />

            <label for="receiver-address">Địa chỉ người nhận:</label>
            <textarea id="receiver-address" name="receiver-address" rows="4" required></textarea>

            <label for="delivery-service">Dịch vụ lấy/giao hàng tận nơi:</label>
            <input type="checkbox" id="delivery-service" name="delivery-service" onChange={handleDeliveryServiceChange} />

            <label for="total-fee">Tổng phí (VNĐ):</label>
            <input type="text" id="total-fee" name="total-fee" value={totalFee} readOnly />

            <label for="note">Ghi chú:</label>
            <textarea id="note" name="note" rows="4"></textarea>

            <input type="submit" value="Gửi thông tin" />
            
        </form>

        </div>
    </div>
    )
}

export default PhieuguiKH