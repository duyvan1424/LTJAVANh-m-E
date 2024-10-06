import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import CompanyImage from "../assets/anh-nen-ca-chep-boi-full-hd-dep_025203733.jpg";
import TeamImage from "../assets/team.webp";
import "../styles/information.css";

const InformationPage = () => {
    return (
        <div>
            <Header />
            <div className="information-container">
                <div className="intro">
                    <h1>Giới thiệu về chúng tôi</h1>
                    <p>
                        Chúng tôi là công ty chuyên cung cấp dịch vụ vận chuyển cá Koi hàng đầu,
                        với hơn 10 năm kinh nghiệm trong ngành. Đội ngũ của chúng tôi cam kết
                        mang đến dịch vụ tốt nhất và sự hài lòng cho khách hàng.
                    </p>
                    <img src={CompanyImage} alt="Công ty" />
                </div>

                <div className="team">
                    <h2>Đội ngũ của chúng tôi</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={TeamImage} alt="Nguyễn Văn A" />
                            <h3>Nguyễn Văn A</h3>
                            <p>Chuyên viên vận chuyển cá Koi</p>
                        </div>
                        <div className="team-member">
                            <img src={TeamImage} alt="Trần Thị B" />
                            <h3>Trần Thị B</h3>
                            <p>Quản lý chăm sóc khách hàng</p>
                        </div>
                        <div className="team-member">
                            <img src={TeamImage} alt="Phạm Văn C" />
                            <h3>Phạm Văn C</h3>
                            <p>Kỹ thuật viên chuyên ngành cá Koi</p>
                        </div>
                    </div>
                </div>

                <div className="mission">
                    <h2>Sứ mệnh của chúng tôi</h2>
                    <p>
                        Chúng tôi cam kết cung cấp dịch vụ vận chuyển cá Koi an toàn và đáng tin cậy,
                        đồng thời nâng cao trải nghiệm của khách hàng với dịch vụ chăm sóc tận tình.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default InformationPage;
