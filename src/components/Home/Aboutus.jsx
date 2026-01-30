import React from 'react'
import colorlogo from '../../assets/images/colorlogo.png'

const Aboutus = () => {
  return (
    <>
      {/* Quote Section */}
      <section className="w-full bg-white py-44">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
            ‘ Never compromising on quality and trust in the formulations we deliver. ’
          </h2>

          <p className="mt-12 text-base md:text-lg italic text-gray-600">
            Delivering reliable pharmaceutical and nutraceutical formulations
            to healthcare professionals and partners across Nepal
          </p>
        </div>
      </section>

      {/* About Card Section */}
      <section className="w-full  pb-32">
        <div className="max-w-6xl  mx-auto px-6">
          <div className="border bg-[#F9F9F9] rounded-lg p-12 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
            
            {/* Left Content */}
            <div className="max-w-xl">
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

              <button className="bg-cyan-100 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-cyan-200 transition">
                Learn More
              </button>
            </div>

            {/* Right Logo */}
            <div className="flex-shrink-0">
              <img
                src={colorlogo}
                alt="atm pharmacy logo"
                className="w-56 h-56 object-contain"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
