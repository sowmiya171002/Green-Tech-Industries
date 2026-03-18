
import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import "./App.css";

import Aboutpage from "./Pages/Aboutpage";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
 import Govproject from "./Pages/Govproject";  
import Gallery from "./Pages/Gallery";
import Certification from "./Pages/Certification";
import HomePage from "./Pages/HomePage";
import GetQuote from "./Pages/GetQuote";


function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage /> } />  
        <Route path="/products" element={<Product />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/govproject" element={<Govproject />} /> 
        <Route path="/Gallery" element={<Gallery />} /> 
        <Route path="/certification" element={<Certification />} />
    
        <Route path="/getquote" element={<GetQuote />} />
      </Routes>
      

      <Footer />  
    </BrowserRouter>
  );
}

export default App;