import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Navbar from '../Components/Navbar'
import ProductDetails from '../Components/ProductDetails'
import Cart from '../Pages/Cart' 
import Checkout from '../Pages/Checkout'
import Footer from '../Components/Footer'
import Categories from "../Components/Categories"

const Allrouters = () => {
  return (
    <div>
      <Navbar />
      
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Categories" element={<Categories />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Allrouters