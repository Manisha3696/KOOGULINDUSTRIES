import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Products from './Pages/Products'
import Contactus from './Pages/Contactus'

function App() {
  return (
    <div>
      <BrowserRouter>
         <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
