import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Products from './Pages/Products'
import Contactus from './Pages/Contactus'
import Dropdown from './Components/Dropdown'
import Flower from './Pages/Flower'
import Spices from './Pages/Spices'
import Poojaproduct from './Pages/Poojaproduct'
import Rice from './Pages/Rice'

function App() {
  return (
    <div>
      <BrowserRouter>
         <Header/>
         <Dropdown/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='/Flower'element={<Flower/>}></Route>
          <Route path='/Spices'element={<Spices/>}></Route>
          <Route path='/Rice'element={<Rice/>}></Route>
          <Route path='/Poojaitem'element={<Poojaproduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
