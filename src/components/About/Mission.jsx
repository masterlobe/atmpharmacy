import React from 'react'
import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full bg-white py-32"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Mission */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-md text-gray-800 leading-relaxed max-w-5xl mx-auto mb-36"
        >
        <h2 className="text-4xl font-semibold text-black mb-6">
          Our Mission
        </h2>
        
          Our mission is to support healthcare professionals and partners by
          providing pharmaceutical and nutraceutical formulations developed
          with a strong focus on quality, reliability, and responsible practices.
        </motion.p>

        {/* Vision */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-md text-gray-800 leading-relaxed max-w-5xl mx-auto"
        >
        <h2 className="text-4xl font-semibold text-black mb-6">
          Our Vision
        </h2>
        
          Our vision is to be a trusted pharmaceutical partner recognized for
          consistent quality standards, ethical operations, and dependable
          healthcare support across the regions we serve.
        </motion.p>

      </div>
    </motion.section>
  )
}

export default Mission
