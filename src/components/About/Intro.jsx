import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar'
import logo from '../../assets/images/colorlogo.png'

const quoteText =
  "Our focus is simple: quality products, reliable supply, and long-term healthcare partnerships."

const useTypewriter = (text, speed = 35) => {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return displayed
}

const Intro = () => {
  const typedText = useTypewriter(quoteText)

  return (
    <>
      {/* Quote / Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#EEF2F3] to-[#759499]">
        
        {/* Navbar inside hero */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Quote content */}
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-black leading-snug">
            “{typedText}”
            <span className="inline-block w-[2px] h-8 md:h-10 bg-black ml-1 animate-pulse" />
          </h1>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-semibold text-black mb-6">
              Welcome to atmPharmacy
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 text-md leading-relaxed mb-6">
                ATM Pharmacy is a pharmaceutical organization focused on the supply
                and distribution of pharmaceutical and nutraceutical formulations.
                We work with healthcare professionals, pharmacies, and business
                partners to ensure reliable access to quality-focused formulations.
              </p>

              <p className="text-gray-800 text-md leading-relaxed">
                Our operations are guided by a commitment to responsible practices,
                consistency, and long-term professional partnerships. We aim to
                support healthcare delivery by maintaining clear communication,
                dependable supply processes, and product portfolios developed with
                quality standards in mind.
              </p>
            </motion.div>
          </div>

          {/* Right Logo */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="atm pharmacy logo"
              className="w-72 h-72 object-contain"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default Intro
