import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Shop from './pages/Shop'
import ShopCat from './pages/ShopCat'
import Loginsignup from './pages/Loginsignup'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kids_banner from "./assets/banner_kids.png"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCat banner = {men_banner} category="men" />} />
          <Route path="/women" element={<ShopCat banner = {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCat banner = {kids_banner} category="kid" />} />
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
      <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
