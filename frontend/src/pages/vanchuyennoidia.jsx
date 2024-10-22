import React, { useState } from "react";
import ContactForm from "./ContactForm";
import FeedbackForm from "./FeedbackForm";
import "./ShippingServicePage.css"; // Thêm file CSS cho trang

const ShippingServicePage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState("");

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    // Giả lập quá trình theo dõi đơn hàng
    if (trackingNumber) {
      setTrackingResult(
        `Trạng thái đơn hàng với số theo dõi "${trackingNumber}" là: Đang giao.`
      );
    } else {
      setTrackingResult("Vui lòng nhập số theo dõi.");
    }
  };

  return (
    <div className="shipping-service-page">
      <h1>Dịch Vụ Vận Chuyển Hàng Nội Địa</h1>

      <section>
        <h2>Mô Tả Dịch Vụ</h2>
        <p>
          Chúng tôi cung cấp dịch vụ giao hàng nhanh và giao hàng tiết kiệm. Với
          đội ngũ giao hàng chuyên nghiệp, bạn có thể yên tâm về thời gian và độ
          an toàn của hàng hóa.
        </p>
        <p>
          Chúng tôi phục vụ trên toàn quốc với mạng lưới giao hàng rộng rãi, đảm
          bảo hàng hóa của bạn đến tay người nhận một cách nhanh chóng và an
          toàn.
        </p>
      </section>

      <section>
        <h2>Bảng Giá</h2>
        <table>
          <thead>
            <tr>
              <th>Dịch Vụ</th>
              <th>Giá (VNĐ)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Giao hàng nhanh</td>
              <td>30.000</td>
            </tr>
            <tr>
              <td>Giao hàng tiết kiệm</td>
              <td>20.000</td>
            </tr>
          </tbody>
        </table>
        <p>
          Chúng tôi thường xuyên có các chương trình khuyến mãi, hãy theo dõi để
          không bỏ lỡ!
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
          <li>Truy cập vào trang đặt hàng của chúng tôi.</li>
          <li>Điền thông tin sản phẩm và địa chỉ giao hàng.</li>
          <li>Chọn hình thức thanh toán.</li>
          <li>Xác nhận đơn hàng và chờ nhận hàng.</li>
        </ol>
      </section>

      <section>
        <h2>Chính Sách Vận Chuyển và Hoàn Trả</h2>
        <p>
          Chúng tôi cam kết bảo hiểm hàng hóa trong quá trình vận chuyển. Nếu
          hàng hóa bị hư hỏng, chúng tôi sẽ hoàn tiền theo chính sách hoàn trả
          của chúng tôi.
        </p>
      </section>

      <section>
        <h2>Liên Hệ</h2>
        <p>Số điện thoại: 0123 456 789</p>
        <p>Email: contact@example.com</p>
        <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        <ContactForm />
      </section>

      <section>
        <h2>Đánh Giá và Phản Hồi</h2>
        <FeedbackForm />
      </section>
    </div>
  );
};

export default ShippingServicePage;
