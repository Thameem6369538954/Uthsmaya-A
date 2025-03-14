import React from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import ProductCategories from '../Components/ProductCategories'
import BannerCarousel from '../Components/BannerCarousel'
import Gridbox from '../Components/Gridbox'
import ProductCarousel from '../Components/ProductCarouselA'
import Carob from "../Components/Carob"
import Offerbaner from '../Components/Offerbaner'
import ShowcaseCom from '../Components/ShowcaseCom'
import TestimonialCarousel from '../Components/TestimonialCarousel'

const Home = () => {
  return (
    <div>
       {/* <Header /> */}
       {/* <BannerCarousel /> */}
       <ProductCategories />
       <ShowcaseCom />
       {/* <Categories /> */}
       <Gridbox />
       <ProductCarousel />
       <Offerbaner />

       <Carob />
       <TestimonialCarousel />
    </div>
  )
}

export default Home