import React, { useState } from 'react';

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
            maxWidth: '800px',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
        },
        header: {
            textAlign: 'center',
            marginBottom: '40px',
        },
        mainTitle: {
            color: '#d9534f',
        },
        mainDescription: {
            fontSize: '18px',
            marginBottom: '20px',
        },
        section: {
            marginBottom: '40px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            margin: '20px 0',
        },
        th: {
            border: '1px solid #ddd',
            padding: '12px',
            backgroundColor: '#f2f2f2',
        },
        td: {
            border: '1px solid #ddd',
            padding: '12px',
            textAlign: 'center',
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
        },
    };

    return (
        <div style={styles.container}>

            <header style={styles.header}>
                <h1 style={styles.mainTitle}>Dịch Vụ Vận Chuyển Hàng Nội Địa</h1>
                <p style={styles.mainDescription}>
                    Dịch vụ giao hàng uy tín, nhanh chóng và tiết kiệm cho khách hàng cá nhân và doanh nghiệp.
                </p>
            </header>

        
            <section style={styles.section}>
                <h2 style={styles.h2}>Mô Tả Dịch Vụ</h2>
                <p>
                    Chúng tôi cung cấp dịch vụ giao hàng nhanh và giao hàng tiết kiệm. Với đội ngũ giao hàng chuyên nghiệp, bạn có thể yên tâm về thời gian và độ an toàn của hàng hóa.
                </p>
                <p>
                    Chúng tôi phục vụ trên toàn quốc với mạng lưới giao hàng rộng rãi, đảm bảo hàng hóa của bạn đến tay người nhận một cách nhanh chóng và an toàn.
                </p>
            </section>

         
            <section style={styles.section}>
                <h2 style={styles.h2}>Bảng Giá Dịch Vụ</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Dịch Vụ</th>
                            <th style={styles.th}>Giá (VNĐ)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.td}>Giao hàng nhanh</td>
                            <td style={styles.td}>300.000</td>
                        </tr>
                        <tr>
                            <td style={styles.td}>Giao hàng tiết kiệm</td>
                            <td style={styles.td}>200.000</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Chúng tôi thường xuyên có các chương trình khuyến mãi, hãy theo dõi để không bỏ lỡ!
                </p>
            </section>

            <section style={styles.section}>
                <h2 style={styles.h2}>Theo Dõi Đơn Hàng</h2>
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

         
            <section style={styles.section}>
                <h2 style={styles.h2}>Hướng Dẫn Sử Dụng</h2>
                <p>Cách đặt hàng, thanh toán và nhận hàng:</p>
                <ol>
                    <li>Truy cập vào trang đặt hàng của chúng tôi.</li>
                    <li>Điền thông tin sản phẩm và địa chỉ giao hàng.</li>
                    <li>Chọn hình thức thanh toán.</li>
                    <li>Xác nhận đơn hàng và chờ nhận hàng.</li>
                </ol>
            </section>

           
            <section style={styles.section}>
                <h2 style={styles.h2}>Chính Sách Vận Chuyển và Hoàn Trả</h2>
                <p>
                    Chúng tôi cam kết bảo hiểm hàng hóa trong quá trình vận chuyển.
                    Nếu hàng hóa bị hư hỏng, chúng tôi sẽ hoàn tiền theo chính sách hoàn trả của chúng tôi.
                </p>
            </section>

    
            <section style={styles.section}>
                <h2 style={styles.h2}>Liên Hệ</h2>
                <p>Số điện thoại: 0123 456 789</p>
                <p>Email: contact@example.com</p>
                <p>Địa chỉ: Văn phòng: Tầng 5, Tòa nhà IMC, 62 Trần Quang Khải</p>
            </section>

            <section style={styles.section}>
                <h2 style={styles.h2}>Đánh Giá và Phản Hồi</h2>
                <p>
                    Chúng tôi trân trọng mọi ý kiến đóng góp của khách hàng để cải thiện chất lượng dịch vụ.
                    Hãy để lại phản hồi của bạn để chúng tôi phục vụ bạn tốt hơn!
                </p>
            </section>
        </div>
    );
};

export default Vanchuyennoidia;
