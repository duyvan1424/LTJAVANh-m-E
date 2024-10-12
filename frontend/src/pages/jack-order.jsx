import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "./jack-order.css";
import React from "react";
import MyStepper from "../components/layout/stepper";
class TrackOrderPage extends React.Component {
  state = {
    idOrder: "",
  };
  handleChangeSearch = (event) => {
    this.setState({ idOrder: event.target.value });
  };
  handleSummit = (event) => {
    //xử lí sự kiện khi nhấn enter hoặc nhấn tìm kiếm
    event.preventDefault();
    console.log("Giá trị nhập vào:", this.state.idOrder);
  };
  render() {
    return (
      <div>
        <Header />

        <div className="body">
          <form className="search-form" onSubmit={this.handleSummit}>
            <label htmlFor="order"></label>
            <input
              type="text"
              value={this.state.idOrder}
              className="search-input"
              placeholder="Nhập mã đơn hàng"
              onChange={(event) => this.handleChangeSearch(event)}
              required
            />
            <button type="submit" className="search-button">
              Tìm Kiếm
            </button>
          </form>
          <MyStepper></MyStepper>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default TrackOrderPage;
