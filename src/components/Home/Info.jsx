import React from 'react'

const Info = () => {
  return (
    <section className="w-full bg-[#F3FCFF] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.12)] px-4 py-20">
          
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-12">
            
            {/* Item 1 */}
            <div>
              <h3 className="text-3xl font-semibold text-black mb-1">
                5 years
              </h3>
              <p className="text-gray-600 text-lg">
                years of experience
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-3xl font-semibold text-black mb-1">
                Extensive
              </h3>
              <p className="text-gray-600 text-lg">
                product portfolio
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-3xl font-semibold text-black mb-1">
                Quality-focused
              </h3>
              <p className="text-gray-600 text-lg">
                Satisfaction Rate
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
