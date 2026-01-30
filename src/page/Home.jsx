import React from 'react'
import Landing from '../components/Home/Landing'
import Aboutus from '../components/Home/Aboutus'
import Catalogue from '../components/Home/Catalogue'
import Info from '../components/Home/Info'
import Contact from '../components/Home/Contact'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div>
      <Landing />
      <Aboutus />
      <Catalogue />
      <Info />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
