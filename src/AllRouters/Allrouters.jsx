import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Navbar from '../Components/Navbar'

const Allrouters = () => {
  return (
    <div>
      <Navbar />
       <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default Allrouters