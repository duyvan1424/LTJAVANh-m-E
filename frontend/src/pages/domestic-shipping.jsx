import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import '../styles/domestic-shipping.css'
import Carousel from "../components/layout/carrousel";
import Image1 from "../assets/vanchuyenchuyennghiep.jpg";
import Image2 from "../assets/donggoi.jpg";
import Image3 from "../assets/theodoi.jpg";
import Image4 from "../assets/nhandon.jpg";
import Image5 from "../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg";
import Image6 from "../assets/logo.png";

const DomesticShipping = () => {

    return (
        <div>
            <Header />

            {/* Hero div */}
            <div className="hero">
                <h1>Vận Chuyển Cá Koi An Toàn và Nhanh Chóng</h1>
                <p>Chúng tôi chuyên cung cấp dịch vụ vận chuyển cá koi nội địa với quy trình chuyên nghiệp và đảm bảo an toàn.</p>
                <a href="#contact" className="btn">Liên hệ ngay</a>
            </div>

            {/* Services div */}
            <div className="services">
                <h2>Dịch Vụ Của Chúng Tôi</h2>
                <div className="service-list">
                    <div className="service-item">
                        <h3>Vận Chuyển Cá Koi</h3>
                        <p>Vận chuyển cá koi trên toàn quốc với đội ngũ chuyên nghiệp.</p>
                        <img src={Image1} alt="Vận Chuyển Cá Koi" className="image" />
                    </div>
                    <div className="service-item">
                        <h3>Hỗ Trợ Đóng Gói</h3>
                        <p>Đóng gói cá koi cẩn thận để đảm bảo cá được an toàn trong suốt quá trình vận chuyển.</p>
                        <img src={Image2} alt="Hỗ Trợ Đóng Gói" className="image" />
                    </div>
                    <div className="service-item">
                        <h3>Theo Dõi Lộ Trình</h3>
                        <p>Cập nhật lộ trình vận chuyển cá koi trực tiếp cho khách hàng.</p>
                        <img src={Image3} alt="Theo Dõi Lộ Trình" className="image" />
                    </div>
                </div>
            </div>

            {/* Process div */}
            <div className="process">
                <h2>Quy Trình Vận Chuyển</h2>
                <div className="process-steps">
                    <div className="step">
                        <h3>Bước 1: Tiếp Nhận Đơn Hàng</h3>
                        <p>Khách hàng gửi thông tin về cá koi và địa chỉ vận chuyển.</p>
                        <img src={Image4} alt="Bước 1" className="image" />
                    </div>
                    <div className="step">
                        <h3>Bước 2: Đóng Gói Cá Koi</h3>
                        <p>Cá koi được đóng gói với túi khí và hộp bảo vệ chuyên dụng.</p>
                        <img src={Image5} alt="Bước 2" className="image" />
                    </div>
                    <div className="step">
                        <h3>Bước 3: Vận Chuyển</h3>
                        <p>Cá koi được vận chuyển bằng xe tải hoặc máy bay, đảm bảo an toàn và nhanh chóng.</p>
                        <img src={Image6} alt="Bước 3" className="image" />
                    </div>
                </div>
            </div>

            {/* Contact div */}
            <div id="contact" className="contact">
                <h2>Liên Hệ Với Chúng Tôi</h2>
                <form>
                    <label htmlFor="name">Họ và tên:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Nội dung:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Gửi Thông Tin</button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default DomesticShipping;
