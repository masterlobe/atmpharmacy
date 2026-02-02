import React from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import img1 from '../../assets/images/catalogue/1.png'
import img2 from '../../assets/images/catalogue/2.png'
import img3 from '../../assets/images/catalogue/3.png'
import img4 from '../../assets/images/catalogue/4.png'

const Catalogue = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-white py-32">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl font-semibold text-black mb-12">
          Our Pharmaceutical Range
        </h2>

        <p className="text-lg italic text-gray-600 max-w-3xl mx-auto">
          We follow a focused, quality-driven approach to developing and supplying
          pharmaceutical and nutraceutical formulations for professional use.
        </p>
      </motion.div>

      {/* Representative Formulations */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-24"
      >
        <h3 className="text-xl font-medium underline mb-8">
          Representative Formulations
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-end">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            viewport={{ once: true }}
            className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center cursor-pointer"
          >
            <h4 className="text-xl font-semibold mb-1">Absolute - M</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img1}
              alt="Absolute M Tablets"
              className="mx-auto h-44 object-contain"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            viewport={{ once: true }}
            className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center cursor-pointer"
          >
            <h4 className="text-xl font-semibold mb-1">Absolute - F</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img2}
              alt="Absolute F Tablets"
              className="mx-auto h-44 object-contain"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            viewport={{ once: true }}
            className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center cursor-pointer"
          >
            <h4 className="text-xl font-semibold mb-1">Quinol 300</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img3}
              alt="Quinol 300 Tablets"
              className="mx-auto h-44 object-contain"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            viewport={{ once: true }}
            className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center relative cursor-pointer"
          >
            <h4 className="text-xl font-semibold mb-1">Absolute - F</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img4}
              alt="Absolute F Tablets"
              className="mx-auto h-44 object-contain"
            />
          </motion.div>

        </div>
        <div className="flex justify-end mt-6">
          <span className="text-sm underline text-gray-400">
            And Many More..
          </span>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 text-center"
      >
        <button
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-10 py-4 rounded-full text-lg transition"
          onClick={() => navigate("/catalogue")}
        >
          View Our Catalogue
        </button>
      </motion.div>
    </section>
  )
}

export default Catalogue
