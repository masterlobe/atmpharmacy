import React from 'react'
import Box from './Box'

const Catalogue = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Search Row */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch mb-4">
          
          {/* Search Input */}
          <div className="flex-1 relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by medicine or brand name"
              className="w-full pl-14 pr-6 py-4 rounded-l-xl shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Search Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-r-xl text-lg shadow-md transition">
            Search
          </button>
        </div>

        {/* Filter Row
        <div className="flex justify-end mb-4">
          <select className="px-6 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none">
            <option>Filter By Category</option>
            <option>Filter By Brand</option>
            
          </select>
        </div> */}

        {/* Category Pills */}
        <div className="flex flex-wrap gap-4 mt-6">
          {[
            "Women’s Health",
            "Nutraceuticals & Supplements",
            "Bone & Joint Care",
            "Cardio & Metabolic Support",
            "Gut Health",
            "General Wellness",
          ].map((cat) => (
            <button
              key={cat}
              className="px-6 py-3 rounded-xl bg-white shadow-md border border-gray-200 text-base hover:bg-gray-50 transition whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-10">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </section>
  )
}

export default Catalogue
