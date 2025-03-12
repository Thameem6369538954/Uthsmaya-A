import React from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import ProductCategories from '../Components/ProductCategories'
import BannerCarousel from '../Components/BannerCarousel'

const Home = () => {
  return (
    <div>
       <Header />
       <ProductCategories />
       <Categories />
       <BannerCarousel />
    </div>
  )
}

export default Home