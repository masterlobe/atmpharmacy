import React from 'react'
import { motion } from 'framer-motion'
import colorlogo from '../../assets/images/colorlogo.png'
import { Navigate, useNavigate } from 'react-router-dom'

const Aboutus = () => {
  const Navigate = useNavigate()
  return (
    <>
      {/* Quote Section */}
      <section className="w-full bg-white py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
            ‘ Never compromising on quality and trust in the formulations we deliver. ’
          </h2>

          <p className="mt-12 text-base md:text-lg italic text-gray-600">
            Delivering reliable pharmaceutical and nutraceutical formulations
            to healthcare professionals and partners across Nepal
          </p>
        </motion.div>
      </section>

      {/* About Card Section */}
      <section className="w-full  pb-32">
        <div className="max-w-6xl  mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="border bg-[#F9F9F9] rounded-lg p-12 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
          >
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h3 className="text-2xl font-semibold text-black mb-4">
                About atmPharmacy
              </h3>

              <p className="text-gray-700 leading-relaxed mb-8">
                At atmPharmacy, we focus on developing and supplying high-quality
                pharmaceutical and nutraceutical formulations that meet the evolving
                needs of healthcare professionals, pharmacies, and distributors.
                Our portfolio is built with a clear emphasis on quality, consistency,
                and regulatory compliance.
              </p>

              <button className="bg-cyan-100 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-cyan-200 transition" onClick={()=>{Navigate('/about')}}>
                Learn More
              </button>
            </motion.div>

            {/* Right Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="shrink-0"
            >
              <img
                src={colorlogo}
                alt="atm pharmacy logo"
                className="w-56 h-56 object-contain"
              />
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
