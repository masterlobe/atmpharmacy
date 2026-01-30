import React from 'react'
import img1 from '../../assets/images/catalogue/1.png'
import img2 from '../../assets/images/catalogue/2.png'
import img3 from '../../assets/images/catalogue/3.png'
import img4 from '../../assets/images/catalogue/4.png'

const Catalogue = () => {
  return (
    <section className="w-full bg-white py-32">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-semibold text-black mb-4">
          Our Pharmaceutical Range
        </h2>

        <p className="text-lg italic text-gray-600 max-w-3xl mx-auto">
          We follow a focused, quality-driven approach to developing and supplying
          pharmaceutical and nutraceutical formulations for professional use.
        </p>
      </div>

      {/* Representative Formulations */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <h3 className="text-xl font-medium underline mb-8">
          Representative Formulations
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-end">
          
          {/* Card 1 */}
          <div className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center">
            <h4 className="text-xl font-semibold mb-1">Absolute - M</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img1}
              alt="Absolute M Tablets"
              className="mx-auto h-44 object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center">
            <h4 className="text-xl font-semibold mb-1">Absolute - F</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img2}
              alt="Absolute F Tablets"
              className="mx-auto h-44 object-contain"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center">
            <h4 className="text-xl font-semibold mb-1">Quinol 300</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img3}
              alt="Quinol 300 Tablets"
              className="mx-auto h-44 object-contain"
            />
          </div>

          {/* Card 4 */}
          <div className="bg-white border rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-8 text-center relative">
            <h4 className="text-xl font-semibold mb-1">Absolute - F</h4>
            <p className="text-base mb-6">Tablets</p>
            <img
              src={img4}
              alt="Absolute F Tablets"
              className="mx-auto h-44 object-contain"
            />
          </div>

        </div>
        <div className="flex justify-end mt-6">
          <span className="text-sm underline text-gray-400">
            And Many More..
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-10 py-4 rounded-full text-lg transition">
          View Our Catalogue
        </button>
      </div>
    </section>
  )
}

export default Catalogue
