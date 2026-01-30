import React from 'react'
import { motion } from 'framer-motion'

const Info = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full bg-[#F3FCFF] py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.12)] px-4 py-20"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-12">
            
            {/* Item 1 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <h3 className="text-3xl font-semibold text-black mb-1">
                5 years
              </h3>
              <p className="text-gray-600 text-lg">
                years of experience
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <h3 className="text-3xl font-semibold text-black mb-1">
                Extensive
              </h3>
              <p className="text-gray-600 text-lg">
                product portfolio
              </p>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <h3 className="text-3xl font-semibold text-black mb-1">
                Quality-focused
              </h3>
              <p className="text-gray-600 text-lg">
                Satisfaction Rate
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Info
