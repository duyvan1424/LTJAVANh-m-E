import React, { useState } from 'react';
import Image from '../assets/giaohang.jpg';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const Vanchuyennoidia = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingResult, setTrackingResult] = useState('');
    localStorage.setItem("fee", 30000);

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
            width: 'auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        mainTitle: {
            color: '#d9534f',
            fontSize: '60px',
            margin: '0',
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
        <>
            <Header />
            <div style={styles.container}>
                <header style={styles.header}>
                    <h1 style={styles.mainTitle}><b>Giao Hàng Nội Địa</b></h1>
                    <img src={Image} alt="Mô tả ảnh" style={{ width: '800px', height: '300px' }} />
                </header>
                <p style={styles.mainDescription}>
                    Công ty vận chuyển của chúng tôi tự hào là một đơn vị chuyên nghiệp, đáng tin cậy trong việc vận chuyển cá cảnh,
                    đặc biệt là cá Koi – loài cá được coi là biểu tượng của may mắn và thịnh vượng. Với niềm đam mê và sự tận tâm,
                    chúng tôi không chỉ đảm bảo cá của bạn được vận chuyển an toàn mà còn trải nghiệm dịch vụ chất lượng hàng đầu.
                </p>
                <div style={styles.callToAction}>
                    <button style={styles.buttonPrimary}>
                        <a href="/phieugui">Giao Hàng Ngay!</a>
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


            </div>
            <Footer />
        </>
    );
};

export default Vanchuyennoidia;
