import { useState } from 'react'

import './App.css'
import './index.css'
import Header from './Components/Header/Header'
import CarouselEffect1 from './Components/Carousel/CarouselEffect1'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'
function App() {

  return (
    <div>
      <Header/>
      <CarouselEffect1/>
      <Category/>
      <Product/>
    </div>
  )
}

export default App
