import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar'
import video from '../../assets/videoFinal.mp4'
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="landing flex-1 z-0 flex flex-col lg:flex-row items-center bg-white px-8 sm:px-10 md:px-12 lg:px-16 relative overflow-visible">
        {/* Left content */}
        {/* change this to fix position */}
        <div className="w-full lg:w-full z-10 text-center lg:text-left relative translate-y-0 md:translate-y-100 lg:-translate-y-24 flex flex-col items-center lg:items-start">
          <div className="inline-block mb-6 px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-sm md:text-sm lg:text-md font-medium">
            Focused on long-term healthcare partnerships
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 sm:mb-8 lg:mb-8">
            Delivering pharmaceutical formulations
            <br />
            built on quality and trust
          </h1>

          <p className="text-gray-600 text-base w-2/3 sm:text-lg md:text-lg lg:text-lg max-w-full sm:max-w-4xl lg:max-w-4xl mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
            We work with healthcare professionals and partners to deliverpharmaceutical
             and nutraceutical formulations built on quality standards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <button
              onClick={() => navigate("/catalogue")}
              className="px-10 py-4 text-md rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              View Catalogue
            </button>
            <button
              
              className="px-10 py-4 text-md rounded-full border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
            >
              Know More
            </button>
          </div>

          <p className="text-sm  text-gray-400 mt-8 text-center lg:text-left">
            View our product catalogue to explore our range of formulations
          </p>
        </div>

        {/* Right video */}
        <div className="w-full mt-10 sm:mt-14 md:mt-0 flex justify-end md:absolute md:right-[-4%] md:top-1/2 md:-translate-y-1/2 md:w-[55%] lg:right-[0%] lg:top-2/3 lg:-translate-y-1/2 lg:w-[60%] lg:z-0 pointer-events-none">
          <div className="w-full sm:w-[85%] md:w-full lg:w-full aspect-video overflow-hidden rounded-2xl">
            <video
              className="w-full h-full object-cover"
              src={video}
              autoPlay
              muted
              
              playsInline
            />
          </div>
        </div>
      </div>
      <style jsx>{`
      `}</style>
    </div>
  )
}

export default Landing