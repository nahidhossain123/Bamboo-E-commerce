import React, { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import RelatedProduct from '../components/related_product/RelatedProduct'
import SingleProduct from '../components/single_product/SingleProduct'

const SingelProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar />
          <SingleProduct />
          <RelatedProduct />
        <Footer />
    </div>
  )
}

export default SingelProductPage