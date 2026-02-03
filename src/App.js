import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Catalogue from './page/Catalogue'
import Details from './components/Catalogue/Details'
import Admin from './Admin/Login'
import AdminPage from './Admin/Admin'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/details" element={<Details />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminPage" element={<AdminPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}


export default App
