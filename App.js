import React from 'react'
import './App.css';
import 'antd/dist/antd.css';

import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Items from './component/Item/Items';
import Footer from './component/Footer';
import { ProductDetail } from './component/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='product-detail/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App