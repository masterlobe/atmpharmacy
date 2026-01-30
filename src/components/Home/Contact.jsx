import React from 'react'

const Contact = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-black mb-3">
            Have some Questions?
          </h2>
          <p className="text-gray-600 text-lg">
            feel free to contact us anytime, we will be glad to help you solve your query
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-hidden">
          
          {/* Left Panel */}
          <div className="bg-cyan-100 p-10 flex flex-col gap-6">
            
            <div className="bg-white rounded-xl px-6 py-4 shadow flex items-center gap-4">
              <span className="text-xl">📞</span>
              <span className="text-black font-medium">
                9266830790 | 6280527028
              </span>
            </div>

            <div className="bg-white rounded-xl px-6 py-4 shadow flex items-center gap-4">
              <span className="text-xl">✉️</span>
              <span className="text-black font-medium">
                aayushshah12311@gmail.com
              </span>
            </div>

            <div className="bg-white rounded-xl px-6 py-4 shadow flex items-center gap-4">
              <span className="text-xl">📍</span>
              <span className="text-black font-medium">
                koteshwor, kathmandu
              </span>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden shadow">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=koteshwor%20kathmandu&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-12">
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-full border px-6 py-3 shadow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded-full border px-6 py-3 shadow focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-full border px-6 py-3 shadow focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="6"
                  className="w-full rounded-2xl border px-6 py-4 shadow focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-full text-lg font-medium transition"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
