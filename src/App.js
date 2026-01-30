import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Catalogue from './page/Catalogue'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
