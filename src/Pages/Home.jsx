import React from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import ProductCategories from '../Components/ProductCategories'

const Home = () => {
  return (
    <div>
       <Header />
       <ProductCategories />
       <Categories />
    </div>
  )
}

export default Home