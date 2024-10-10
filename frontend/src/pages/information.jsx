import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import CompanyImage from "../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg";
import "../styles/information.css";
import Image1 from "../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg";
import Image2 from "../assets/chuyengia1.jpg";

const InformationPage = () => {
    return (
        <div>
            <Header />
            <div className="information-container">
                <div className="information-header">
                    <h1>Về Chúng Tôi</h1>
                    <p>Chuyên Gia Vận Chuyển Cá Koi Trong Nước và Quốc Tế</p>
                </div>

                <div className="content">
                    <div className="text-section">
                        <h2>Câu Chuyện Của Chúng Tôi</h2>
                        <p>Được thành lập vào năm 2010, công ty chúng tôi bắt đầu với niềm đam mê về cá Koi và nhận thấy nhu cầu cấp thiết về dịch vụ vận chuyển chuyên nghiệp cho loài cá quý giá này. Trải qua hơn một thập kỷ, chúng tôi đã không ngừng phát triển và hoàn thiện hai dịch vụ chính: vận chuyển cá Koi trong nước và quốc tế, trở thành đơn vị hàng đầu trong lĩnh vực này tại Việt Nam.</p>
                    </div>
                    <div className="image-section">
                        <img src={Image1} alt="Câu chuyện của chúng tôi" />
                    </div>
                </div>

                <div className="content">
                    <div className="image-section">
                        <img src={Image1} alt="Sứ mệnh của chúng tôi" />
                    </div>
                    <div className="text-section">
                        <h2>Sứ Mệnh Của Chúng Tôi</h2>
                        <p>Chúng tôi cam kết mang đến dịch vụ vận chuyển cá Koi an toàn, chuyên nghiệp và đáng tin cậy nhất, cả trong nước và quốc tế. Mục tiêu của chúng tôi là bảo vệ sức khỏe và đảm bảo sự thoải mái cho mỗi con cá trong suốt quá trình vận chuyển, giúp chúng thích nghi nhanh chóng với môi trường mới, bất kể điểm đến là đâu.</p>
                    </div>
                </div>

                <div className="service-highlights">
                    <h2>Dịch Vụ Chuyên Biệt Của Chúng Tôi</h2>
                    <div className="service-highlights-content">
                        <div className="service-box">
                            <h3>1. Vận Chuyển Cá Koi Trong Nước</h3>
                            <ul className="service-list">
                                <li>Phục vụ mọi tỉnh thành trên cả nước</li>
                                <li>Thời gian vận chuyển nhanh chóng, đảm bảo an toàn cho cá</li>
                                <li>Phương tiện vận chuyển được thiết kế riêng cho điều kiện đường bộ Việt Nam</li>
                                <li>Hỗ trợ vận chuyển khẩn cấp trong ngày cho các khoảng cách ngắn</li>
                            </ul>
                        </div>
                        <div className="service-box">
                            <h3>2. Vận Chuyển Cá Koi Quốc Tế</h3>
                            <ul className="service-list">
                                <li>Dịch vụ door-to-door đến nhiều quốc gia trên thế giới</li>
                                <li>Am hiểu sâu sắc về thủ tục hải quan và quy định kiểm dịch quốc tế</li>
                                <li>Hệ thống theo dõi trực tuyến, cập nhật tình trạng cá trong suốt hành trình</li>
                                <li>Đóng gói đặc biệt cho các chuyến bay dài, đảm bảo oxy và nhiệt độ ổn định</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="team-section">
                    <h2>Đội Ngũ Chuyên Gia</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={Image2} alt="Nguyễn Văn A" className="team-member-image" />
                            <h3>Nguyễn Văn A - Giám đốc Điều hành</h3>
                            <p>Với hơn 15 năm kinh nghiệm trong ngành nuôi trồng và vận chuyển cá Koi, ông A đã xây dựng nên một mạng lưới vận chuyển rộng khắp trong nước và quốc tế.</p>
                        </div>
                        <div className="team-member">
                            <img src={Image2} alt="Trần Thị B" className="team-member-image" />
                            <h3>Trần Thị B - Trưởng phòng Vận chuyển Quốc tế</h3>
                            <p>Chị B là chuyên gia về logistics quốc tế, am hiểu sâu sắc về thủ tục hải quan và quy định vận chuyển động vật sống xuyên biên giới.</p>
                        </div>
                        <div className="team-member">
                            <img src={Image2} alt="Lê Văn C" className="team-member-image" />
                            <h3>Lê Văn C - Chuyên gia Kỹ thuật</h3>
                            <p>Với bằng Tiến sĩ về Thủy sản, ông C chịu trách nhiệm phát triển và giám sát quy trình vận chuyển, đảm bảo sức khỏe tối ưu cho cá Koi trong mọi điều kiện vận chuyển.</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <h2>Khách Hàng Nói Gì Về Chúng Tôi</h2>
                    <p>"Tôi đã sử dụng dịch vụ vận chuyển cá Koi của công ty cả trong nước và quốc tế. Họ thực sự hiểu rõ về nhu cầu đặc biệt của cá Koi và luôn đảm bảo an toàn tuyệt đối cho đàn cá của tôi. Đặc biệt ấn tượng với dịch vụ vận chuyển quốc tế của họ - mọi thủ tục đều được xử lý một cách chuyên nghiệp và nhanh chóng." - Anh Hoàng, chủ trại cá Koi tại Hà Nội</p>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default InformationPage;
