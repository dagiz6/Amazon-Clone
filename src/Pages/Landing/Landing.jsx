import React from 'react'
import Layout from '../../Components/Layout/Layout'
import CarouselEffect1 from '../../Components/Carousel/CarouselEffect1'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
function Landing() {
  return (
    <div>
  <Layout>
      <CarouselEffect1/>
      <Category/>
      <Product/>
  </Layout>
    </div>
  )
}

export default Landing