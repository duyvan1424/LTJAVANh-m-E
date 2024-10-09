import React, { useRef } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Carousel from "../components/layout/carrousel";
import Product from "../components/layout/product";

function Home() {
  const productRef = useRef(null); // Tạo ref cho Product

  // Hàm cuộn xuống vị trí Product
  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollToProduct={scrollToProduct} />{" "}
      {/* Truyền hàm cuộn vào Header */}
      <Carousel />
      <div ref={productRef}>
        {" "}
        {/* Gán ref cho div chứa Product */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
