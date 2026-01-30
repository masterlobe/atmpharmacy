import React from 'react'
import { motion } from 'framer-motion'

const Tell = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full bg-[#DDF7FD] py-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        >
          <h3 className="text-xl font-semibold mb-6">
            What We Do
          </h3>
          <ul className="space-y-4 text-gray-800 leading-relaxed">
            <li>Supply pharmaceutical and nutraceutical formulations</li>
            <li>Support healthcare professionals and pharmacy partners</li>
            <li>Maintain structured and responsible supply processes</li>
            <li>Focus on long-term professional collaborations</li>
          </ul>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        >
          <h3 className="text-xl font-semibold mb-6">
            Our Approach
          </h3>
          <p className="text-gray-800 leading-relaxed">
            We follow a quality-driven and partnership-focused approach in all
            our operations. Our emphasis remains on maintaining professional
            standards, ensuring consistency, and supporting healthcare partners
            through dependable service and clear communication.
          </p>
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        >
          <h3 className="text-xl font-semibold mb-6">
            Why Work With Us
          </h3>
          <ul className="space-y-4 text-gray-800 leading-relaxed">
            <li>Quality-focused formulation portfolio</li>
            <li>Professional and ethical practices</li>
            <li>Business-oriented healthcare partnerships</li>
            <li>Clear communication and dependable processes</li>
          </ul>
        </motion.div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 text-center shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        >
          <h3 className="text-xl font-semibold mb-6">
            Our Commitment
          </h3>
          <ul className="space-y-4 text-gray-800 leading-relaxed">
            <li>Maintain consistent quality standards</li>
            <li>Ensure reliable and timely supply</li>
            <li>Operate with transparency and accountability</li>
            <li>Support partners through long-term collaboration</li>
          </ul>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Tell
