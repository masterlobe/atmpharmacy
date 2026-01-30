import React from 'react'
import ig from '../../assets/images/Socials/ig.png'
import fb from '../../assets/images/Socials/fb.png'
import x from '../../assets/images/Socials/x.png'
import yt from '../../assets/images/Socials/yt.png'
import footerLogo from '../../assets/images/footerLogo.png'

const Footer = () => {
  return (
    <footer className="w-full bg-[#C4F6FF] py-10 relative overflow-hidden">
      <img
        src={footerLogo}
        alt="atm pharmacy logo background"
        className="absolute inset-0 m-auto w-[200px] opacity-10 pointer-events-none select-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start">
        
        {/* Left Section */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h3 className="text-2xl font-semibold text-black mb-2">
            atmPharmacy
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed w-full lg:w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed w-full lg:w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam
          </p>

          
        </div>

        {/* Right Links */}
        <div className="text-center lg:text-right">
          <h4 className="text-xl font-semibold text-black ">
            Quick Links
          </h4>

          <ul className="space-y-4 text-gray-700 mt-8">
            <li className="underline cursor-pointer">Home</li>
            <li className="underline cursor-pointer">About us</li>
            <li className="underline cursor-pointer">Catalogue</li>
            <li className="underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-center gap-10 mt-8 text-black">
            <span><img
            src={ig}
            alt="atm pharmacy logo"
            className="w-6"
          /></span>
            <span><img
            src={fb}
            alt="atm pharmacy logo"
            className="w-4"
          /></span>
            <span><img
            src={x}
            alt="atm pharmacy logo"
            className="w-7"
          /></span>
            <span><img
            src={yt}
            alt="atm pharmacy logo"
            className="w-7"
          /></span>
            
          </div>
    </footer>
  )
}

export default Footer
