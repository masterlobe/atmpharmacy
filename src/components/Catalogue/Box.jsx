import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import medicine from '../../assets/images/colorlogo.png'

const Box = ({ product }) => {
  const navigate = useNavigate();
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          viewport={{ once: true }}
          onClick={() => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            navigate("/details");
          }}
          className="bg-white border w-[300px] h-[380px] rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center cursor-pointer flex flex-col items-center overflow-hidden"
        >
          <div className="mb-4">
            <h4 className="text-xl font-semibold">
              {product.brandName}
            </h4>
            <p className="text-base text-gray-600">
              {product.formType}
            </p>
          </div>

          <img
            src={product.image || medicine}
            alt={product.brandName}
            className="h-[180px] w-auto object-contain"
          />
        </motion.div>
  )
}

export default Box
