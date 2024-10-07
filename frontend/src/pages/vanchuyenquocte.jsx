import React, { useState } from 'react';
// import ContactForm from './ContactForm';
// import FeedbackForm from './FeedbackForm';

const ShippingServicePage = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingResult, setTrackingResult] = useState('');

    const handleTrackingSubmit = (e) => {
        e.preventDefault();
        if (trackingNumber) {
            setTrackingResult(`Trạng thái đơn hàng với số theo dõi "${trackingNumber}" là: Đang vận chuyển trong khu vực Đông Nam Á.`);
        } else {
            setTrackingResult('Vui lòng nhập số theo dõi.');
        }
    };

    return (
        <div className="shipping-service-page">
            <h1>Dịch Vụ Vận Chuyển Hàng Khu Vực Đông Nam Á</h1>

            <section>
                <h2>Mô Tả Dịch Vụ</h2>
                <p>
                    Chúng tôi cung cấp dịch vụ vận chuyển hàng hóa trong khu vực Đông Nam Á nhanh chóng và tin cậy. Với kinh nghiệm nhiều năm trong lĩnh vực logistics, chúng tôi đảm bảo hàng hóa của bạn được vận chuyển an toàn đến các quốc gia trong khu vực.
                </p>
                <p>
                    Chúng tôi hợp tác với các hãng vận chuyển lớn và có mạng lưới liên kết rộng khắp trong Đông Nam Á, giúp tối ưu hóa thời gian và chi phí vận chuyển cho khách hàng.
                </p>
            </section>

            <section>
                <h2>Bảng Giá Dịch Vụ</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Quốc Gia</th>
                            <th>Giá (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Việt Nam</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Thái Lan</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Malaysia</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Singapore</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Indonesia</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Philippines</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Campuchia</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Lào</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Myanmar</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Brunei</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Chúng tôi thường xuyên có các chương trình khuyến mãi và ưu đãi đặc biệt cho khách hàng vận chuyển trong khu vực Đông Nam Á. Hãy liên hệ để biết thêm chi tiết.
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
                <h2>Hướng Dẫn Sử Dụng</h2>
                <p>Cách đặt hàng, thanh toán và nhận hàng:</p>
                <ol>
                    <li>Truy cập vào trang đặt hàng khu vực Đông Nam Á của chúng tôi.</li>
                    <li>Điền thông tin sản phẩm, địa chỉ người nhận và chọn quốc gia vận chuyển.</li>
                    <li>Chọn hình thức thanh toán (thẻ tín dụng, chuyển khoản quốc tế).</li>
                    <li>Xác nhận đơn hàng và theo dõi trạng thái qua hệ thống tracking.</li>
                </ol>
            </section>

            <section>
                <h2>Chính Sách Vận Chuyển và Hoàn Trả</h2>
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

            <section>
                <h2>Đánh Giá và Phản Hồi</h2>
            </section>
        </div>
    );
};

export default ShippingServicePage;
