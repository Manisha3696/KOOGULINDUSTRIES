import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Header from './Components/Header'
import Flower from './Pages/Flower'
import Rice from './Pages/Rice'
import Spices from './Pages/Spices'
import Poojaproduct from './Pages/Poojaproduct'
import Contactus from './Pages/Contactus'
import Socialicon from './Components/Socialicon'
import Leaves from './Pages/Leaves'
import Snacks from './Pages/Snacks'
import Beeda from './Pages/Beeda'
import Certificate from './Pages/Certificate'

import Whitecarnation from './Flowers/Whitecarnation'
import Softpinkcarnation from './Flowers/Softpinkcarnation'
import Redcarnation from './Flowers/Redcarnation'
import Peachcarnation from './Flowers/Peachcarnation'
import Orangecarnation from './Flowers/Orangecarnation'
import Yellowcarnation from './Flowers/Yellowcarnation'
import Softpurplecarnation from './Flowers/Softpurplecarnation'
import Bacarratcarnation from './Flowers/Bacarratcarnation'
import Purplecarnation from './Flowers/Purplecarnation'
import Pinkcarnation from './Flowers/Pinkcarnation'
import Tuberose from './Flowers/Tuberose'
import Yellowmarigold from './Flowers/Yellowmarigold'
import Orangemarigold from './Flowers/Orangemarigold'
import Mixedmarigold from './Flowers/Mixedmarigold'
import Assortedpoojaflower from './Flowers/Assortedpoojaflower'
import Redrose from './Flowers/Redrose'
import Orangerose from './Flowers/Orangerose'
import Yellowrose from './Flowers/Yellowrose'
import Carnationgarland from './Flowers/Carnationgarland'
import Rosegarland from './Flowers/Rosegarland'
import Weddinggarland from './Flowers/Weddinggarland'
import Tuberosegarland from './Flowers/Tuberosegarland'
import Redrosepetal from './Flowers/Redrosepetal'
import Yellowrosepetal from './Flowers/Yellowrosepetal'
import Orangerosepetal from './Flowers/Orangerosepetal'
import Mixedrosepetal from './Flowers/Mixedrosepetal'
import Jasminestring from './Flowers/Jasminestring'
import Carnationstring from './Flowers/Carnationstring'
import Marigoldstring from './Flowers/Marigoldstring'
import Babybreathstring from './Flowers/Babybreathstring'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Socialicon/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/Flower' element={<Flower/>}></Route>
          <Route path='/White-carnation' element={<Whitecarnation/>}></Route>
          <Route path='/Soft-pink-carnation' element={<Softpinkcarnation/>}></Route>
          <Route path='/Red-carnation' element={<Redcarnation/>}></Route>
          <Route path='/Peach-carnation' element={<Peachcarnation/>}></Route>
          <Route path='/Orange-carnation' element={<Orangecarnation/>}></Route>
          <Route path='/Yellow-carnation' element={<Yellowcarnation/>}></Route>
          <Route path='/Soft-purple-carnation' element={<Softpurplecarnation/>}></Route>
          <Route path='/Bacarrat-carnation' element={<Bacarratcarnation/>}></Route>
          <Route path='/Purple-carnation' element={<Purplecarnation/>}></Route>
          <Route path='/Pink-carnation' element={<Pinkcarnation/>}></Route>
          <Route path='/Tube-rose' element={<Tuberose/>}></Route>
          <Route path='/Yellow-mari-gold' element={<Yellowmarigold/>}></Route>
          <Route path='/Orange-mari-gold' element={<Orangemarigold/>}></Route>
          <Route path='/Mixed-mari-gold' element={<Mixedmarigold/>}></Route>
          <Route path='/Assorted-pooja-flower' element={<Assortedpoojaflower/>}></Route>
          <Route path='/Red-rose' element={<Redrose/>}></Route>
          <Route path='/Orange-rose' element={<Orangerose/>}></Route>
          <Route path='/Yellow-rose' element={<Yellowrose/>}></Route>
          <Route path='/Carnation-garland' element={<Carnationgarland/>}></Route>
          <Route path='/Rose-garland' element={<Rosegarland/>}></Route>
          <Route path='/Wedding-carland' element={<Weddinggarland/>}></Route>
          <Route path='/Tuberose-garland' element={<Tuberosegarland/>}></Route>
          <Route path='/Red-rose-petal' element={<Redrosepetal/>}></Route>
          <Route path='/Yellow-rose-petal' element={<Yellowrosepetal/>}></Route>
          <Route path='/Orange-rose-petal' element={<Orangerosepetal/>}></Route>
          <Route path='/Mixed-rose-petal' element={<Mixedrosepetal/>}></Route>
          <Route path='/Jasmine-string' element={<Jasminestring/>}></Route>
          <Route path='/Carnation-string' element={<Carnationstring/>}></Route>
          <Route path='/Marigold-string' element={<Marigoldstring/>}></Route>
          <Route path='/Baby-breath-string' element={<Babybreathstring/>}></Route>

          <Route path='/Rice' element={<Rice/>}></Route>
          <Route path='/Spices' element={<Spices/>}></Route>
          <Route path='/Poojaproduct' element={<Poojaproduct/>}></Route>
          <Route path='/Poojaproduct' element={<Leaves/>}></Route>
          <Route path='/Poojaproduct' element={<Snacks/>}></Route>
          <Route path='/Poojaproduct' element={<Beeda/>}></Route>
          <Route path='/Contactus' element={<Certificate/>}></Route>
          <Route path='/Contactus' element={<Contactus/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App