import React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Carousel from '../components/layout/carrousel'
import Product from '../components/layout/product'

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Product />

      <Footer />
    </div>
  )
}

export default Home
