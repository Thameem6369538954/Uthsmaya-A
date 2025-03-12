import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Navbar from '../Components/Navbar'
import ProductDetails from '../Components/ProductDetails'
import Cart from '../Pages/Cart' 
import Checkout from '../Pages/Checkout'

const Allrouters = () => {
  return (
    <div>
      <Navbar />
       <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        </Routes>
    </div>
  )
}

export default Allrouters