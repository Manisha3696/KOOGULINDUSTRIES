import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Products from "./Pages/Products";
import Flower from "./Pages/Flower";
import Poojaproduct from "./Pages/Poojaproduct";
import Rice from "./Pages/Rice";
import Spices from "./Pages/Spices";
import Contactus from "./Pages/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/aboutus" component={Aboutus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/flower" component={Flower}></Route>
          <Route path="/poojaproduct" component={Poojaproduct}></Route>
          <Route path="/rice" component={Rice}></Route>
          <Route path="/spices" component={Spices}></Route>
          <Route path="/contactus" component={Contactus}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// import Home from './Pages/Home'
// import Aboutus from './Pages/Aboutus'
// import Products from './Pages/Products'
// import Contactus from './Pages/Contactus'
// import Dropdown from './Components/Dropdown'
// import Flower from './Pages/Flower'
// import Spices from './Pages/Spices'
// import Poojaproduct from './Pages/Poojaproduct'
// import Rice from './Pages/Rice'

