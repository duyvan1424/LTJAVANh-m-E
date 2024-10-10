import React, { useState } from 'react';

const ShippingServicePage = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingResult, setTrackingResult] = useState('');

    const handleTrackingSubmit = (e) => {
        e.preventDefault();
        if (trackingNumber) {
            setTrackingResult(`Trạng thái đơn hàng với số theo dõi "${trackingNumber}" là: Đang vận chuyển đến chi nhánh gần nhất.`);
        } else {
            setTrackingResult('Vui lòng nhập số theo dõi.');
        }
    };

    return (
        <div className="shipping-service-page">
            <h1>Dịch Vụ Vận Chuyển Hàng Quốc Tế</h1>

            <section>
                <h2>Mô Tả Dịch Vụ</h2>
                <p>
                    Chúng tôi cung cấp dịch vụ vận chuyển hàng hóa chuyên nghiệp giữa các chi nhánh của chúng tôi tại Nhật Bản (Hokkaido, Tokyo, Hiroshima). Khách hàng có thể tự đưa hàng đến chi nhánh hoặc sử dụng dịch vụ nhận hàng tận nơi với một khoản phí bổ sung.
                </p>
                <p>
                    Đối với dịch vụ vận chuyển hàng hóa đặc biệt như cá cảnh, nhân viên sẽ kiểm tra sức khỏe và các giấy tờ liên quan trước khi tiến hành vận chuyển. Chúng tôi đảm bảo hàng hóa sẽ được vận chuyển an toàn và nhanh chóng.
                </p>
            </section>

            <section>
                <h2>Các Chi Nhánh Chính</h2>
                <ul>
                    <li>Hokkaido</li>
                    <li>Tokyo</li>
                    <li>Hiroshima</li>
                </ul>
                <p>
                    Hàng hóa sẽ được xử lý và vận chuyển đến chi nhánh gần với địa chỉ người nhận nhất trước khi được giao tận nơi hoặc được khách hàng tự đến lấy.
                </p>
            </section>

            <section>
                <h2>Theo Dõi Đơn Hàng</h2>
                <form onSubmit={handleTrackingSubmit}>
                    <input
                        type="text"
                        placeholder="Nhập số theo dõi"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        required
                    />
                    <button type="submit">Theo Dõi</button>
                </form>
                {trackingResult && <p>{trackingResult}</p>}
            </section>

            <section>
                <h2>Quy Trình Gửi và Nhận Hàng</h2>
                <h3>Gửi Hàng</h3>
                <p>
                    - Khách hàng mang cá cảnh đến chi nhánh, nhân viên sẽ kiểm tra tình trạng sức khỏe và các giấy tờ liên quan trước khi tiến hành đóng gói. <br />
                    - Khách hàng ký hóa đơn viết tay xác nhận tình trạng hàng hóa và đồng ý với quy trình vận chuyển. <br />
                    - Hàng hóa sẽ được vận chuyển đến chi nhánh gần nhất với vị trí người nhận hoặc trực tiếp đến người nhận.
                </p>
                <h3>Nhận Hàng</h3>
                <p>
                    - Sau khi ký hóa đơn điện tử xác nhận nhận hàng, khách hàng sẽ nhận được cá cảnh và các giấy chứng nhận liên quan như giấy chứng nhận xuất xứ, giấy kiểm tra sức khỏe, giải thưởng (nếu có).<br />
                    - Nhân viên sẽ hỗ trợ khách hàng cho đến khi cá thích nghi với môi trường mới.
                </p>
            </section>

            <section>
                <h2>Chính Sách Vận Chuyển và Bảo Hiểm</h2>
                <p>
                    Chúng tôi cam kết bảo hiểm hàng hóa trong quá trình vận chuyển. Nếu hàng hóa bị hư hỏng hoặc thất lạc, chúng tôi sẽ hoàn tiền hoặc gửi lại sản phẩm theo chính sách hoàn trả của công ty.
                </p>
            </section>

            <section>
                <h2>Liên Hệ</h2>
                <p>Số điện thoại: +84 123 456 789</p>
                <p>Email: contact@example.com</p>
                <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ, Việt Nam</p>
            </section>
        </div>
    );
};

export default ShippingServicePage;
