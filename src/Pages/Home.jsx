import React from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import ProductCategories from '../Components/ProductCategories'
import BannerCarousel from '../Components/BannerCarousel'
import Gridbox from '../Components/Gridbox'
import ProductCarousel from '../Components/ProductCarouselA'
import Carob from "../Components/Carob"
import Offerbaner from '../Components/Offerbaner'

const Home = () => {
  return (
    <div>
       {/* <Header /> */}
       <BannerCarousel />
       <ProductCategories />
       <Categories />
       <Gridbox />
       <ProductCarousel />
       <Offerbaner />
       <Carob />
    </div>
  )
}

export default Home