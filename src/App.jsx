import { useEffect, React } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FrontPage from "./components/FrontPage";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App