import React, { useRef } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Carousel from "../components/layout/carousel";
import Product from "../components/layout/product";

function Home() {
  const productRef = useRef(null); // Create ref for Product section

  // Smooth scroll to Product section
  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollToProduct={scrollToProduct} /> {/* Passing scroll function to Header */}
      <Carousel />
      <div ref={productRef}>
        <Product /> {/* Reference for the Product section */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;