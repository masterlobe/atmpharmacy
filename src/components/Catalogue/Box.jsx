import React from 'react'
import { motion } from 'framer-motion'
import img2 from '../../assets/images/catalogue/2.png'

const Box = () => {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          viewport={{ once: true }}
          className="bg-white border w-[300px] h-[380px] rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center cursor-pointer flex flex-col items-center overflow-hidden"
        >
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Absolute - F</h4>
            <p className="text-base text-gray-600">Tablets</p>
          </div>
          <img
            src={img2}
            alt="Absolute F Tablets"
            className="h-[180px] w-auto object-contain"
          />
        </motion.div>
  )
}

export default Box
