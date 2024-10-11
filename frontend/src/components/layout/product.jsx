import React from 'react'
import './product.css'
import ProductImage1 from '../../assets/product-1.png'
import ProductImage2 from '../../assets/product-2.png'

function Product() {
  return (
    <div className='product'>
      <h2 className='main-title'>Dịch vụ Vận chuyển Cá Koi</h2>
      <div className="product-container">

        <div className='shipping-service'>
          <div className="icon">
            <img src={ProductImage1} alt="Ảnh xe tải" className='icon' />
          </div>
          <h3 className='service-title'>Vận chuyển trong nước</h3>
          <p className='service-description'>Dịch vụ vận chuyển cá Koi an toàn và nhanh chóng đến mọi tỉnh thành trong Việt Nam.</p>
          <a href="/domestic-shipping"><button className='btn'>Tìm hiểu thêm</button></a>
        </div>

        <div className='shipping-service'>
          <div className="icon">
            <img src={ProductImage2} alt="Ảnh xe tải" className='icon' />
          </div>
          <h3 className='service-title'>Vận chuyển quốc tế</h3>
          <p className='service-description'>Dịch vụ vận chuyển cá Koi đến các quốc gia trên toàn thế giới, đảm bảo an toàn và tuân thủ quy định.</p>
         <a href="/international-shipping"> <button className='btn'>Tìm hiểu thêm</button></a>
        </div>

      </div>
    </div>
  )
}
export default Product
