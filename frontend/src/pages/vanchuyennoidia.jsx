import React, { useState } from 'react';
import Image from '../assets/giaohang.jpg';

const Vanchuyennoidia = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingResult, setTrackingResult] = useState('');

    const handleTrackingSubmit = (e) => {
        e.preventDefault();
        if (trackingNumber) {
            setTrackingResult(`Trạng thái đơn hàng với số theo dõi "${trackingNumber}" là: Đang giao.`);
        } else {
            setTrackingResult('Vui lòng nhập số theo dõi.');
        }
    };

    const styles = {
        container: {
            margin: '0 auto',
            maxWidth: '1000px',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
        },
        header: {
            textAlign: 'center',
            marginBottom: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center', // Căn giữa theo chiều dọc
            justifyContent: 'space-between', // Căn giữa theo chiều ngang
        },
        mainTitle: {
            color: '#d9534f',
            fontSize: '60px',
            margin: '0', // Bỏ margin để căn chỉnh dễ hơn
        },
        mainDescription: {
            fontSize: '20px',
            marginBottom: '30px',
            textAlign: 'center',
        },
        callToAction: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '50px',
        },
        buttonPrimary: {
            padding: '15px 30px',
            backgroundColor: '#d9534f',
            color: 'white',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            marginBottom: '20px',
            borderRadius: '5px',
        },
        section: {
            marginBottom: '40px',
        },
        trackingForm: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
        },
        trackingInput: {
            padding: '10px',
            border: '1px solid #ddd',
            width: '70%',
            marginRight: '10px',
        },
        trackingButton: {
            padding: '10px 20px',
            backgroundColor: '#d9534f',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        },
        trackingResult: {
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '20px',
            color: 'green',
        },
        h2: {
            color: '#d9534f',
            fontSize: '30px',
        },
        footerContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '50px',
            padding: '20px 0',
            borderTop: '1px solid #ddd',
            backgroundColor: '#f2f2f2',
        },
        footerSection: {
            width: '23%',
            textAlign: 'center',
        },
        footerHeading: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.mainTitle}><b>Giao Hàng Nội Địa</b></h1>
                <img src={Image} alt="Mô tả ảnh" style={{ width: '600px', height: '200px' }} />
            </header>
            <p style={styles.mainDescription}>
                Dịch vụ giao hàng uy tín, nhanh chóng và tiết kiệm cho khách hàng cá nhân và doanh nghiệp.
            </p>
            <div style={styles.callToAction}>
                <button style={styles.buttonPrimary} onClick={() => alert('Giao Hàng Ngay!')}>
                    Giao Hàng Ngay!
                </button>
            </div>

            <section style={styles.section}>
                <h2 style={styles.h2}><b>Mô Tả Dịch Vụ</b></h2>
                <p>
                    Chúng tôi cung cấp dịch vụ giao hàng nhanh và giao hàng tiết kiệm. Với đội ngũ giao hàng chuyên nghiệp, bạn có thể yên tâm về thời gian và độ an toàn của hàng hóa.
                </p>
                <p>
                    Chúng tôi phục vụ trên toàn quốc với mạng lưới giao hàng rộng rãi, đảm bảo hàng hóa của bạn đến tay người nhận một cách nhanh chóng và an toàn.
                </p>
            </section>

            <section style={styles.section}>
                <h2 id="trackingForm" style={styles.h2}><b>Theo Dõi Đơn Hàng</b></h2>
                <form onSubmit={handleTrackingSubmit} style={styles.trackingForm}>
                    <input
                        type="text"
                        placeholder="Nhập số theo dõi"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        style={styles.trackingInput}
                        required
                    />
                    <button type="submit" style={styles.trackingButton}>Theo Dõi</button>
                </form>
                {trackingResult && <p style={styles.trackingResult}>{trackingResult}</p>}
            </section>

            {/* Footer Section */}
            <footer style={styles.footerContainer}>
                <div style={styles.footerSection}>
                    <h2 style={styles.footerHeading}><b>Hướng Dẫn Sử Dụng</b></h2>
                    <p>Cách đặt hàng, thanh toán và nhận hàng:</p>
                    <ol>
                        <li>Truy cập vào trang đặt hàng của chúng tôi.</li>
                        <li>Điền thông tin sản phẩm và địa chỉ giao hàng.</li>
                        <li>Chọn hình thức thanh toán.</li>
                        <li>Xác nhận đơn hàng và chờ nhận hàng.</li>
                    </ol>
                </div>

                <div style={styles.footerSection}>
                    <h2 style={styles.footerHeading}><b>Chính Sách Vận Chuyển và Hoàn Trả</b></h2>
                    <p>
                        Chúng tôi cam kết bảo hiểm hàng hóa trong quá trình vận chuyển.
                        Nếu hàng hóa bị hư hỏng, chúng tôi sẽ hoàn tiền theo chính sách hoàn trả của chúng tôi.
                    </p>
                </div>

                <div style={styles.footerSection}>
                    <h2 style={styles.footerHeading}><b>Liên Hệ</b></h2>
                    <p>Số điện thoại: +84 123 456 789</p>
                    <p>Email: contact@example.com</p>
                    <p>Địa chỉ: Văn phòng: Tầng 5, Tòa nhà IMC, 62 Trần Quang Khải</p>
                </div>

                <div style={styles.footerSection}>
                    <h2 style={styles.footerHeading}><b>Đánh Giá và Phản Hồi</b></h2>
                    <p>
                        Chúng tôi trân trọng mọi ý kiến đóng góp của khách hàng để cải thiện chất lượng dịch vụ.
                        Hãy để lại phản hồi của bạn để chúng tôi phục vụ bạn tốt hơn!
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Vanchuyennoidia;
