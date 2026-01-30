import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/images/logo.png'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])
  return (
    <div className="relative">
    <nav className="w-full flex items-center px-8 py-2 font-inter relative">
      {/* Left: Logo */}
      <div className="shrink-0">
        <img src={logo} alt="Logo" className="w-16 " />
      </div>

      {/* Center: Navigation links */}
      <div className="flex-1 hidden lg:flex justify-center">
        <ul className="flex gap-24 text-lg  tracking-tight font-light">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">Catalogue</li>
          <li className="cursor-pointer hover:text-gray-600">About Us</li>
          <li className="cursor-pointer hover:text-gray-600">Contact Us</li>
        </ul>
      </div>

      {/* Right: Hamburger (md & sm) */}
      <div className="lg:hidden ml-auto">
        <button
          style={{ zIndex: 60 }}
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>
    </nav>
    {/* Dropdown Menu */}
    {open && (
      <div
        ref={dropdownRef}
        className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50"
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">Catalogue</li>
          <li className="cursor-pointer hover:text-gray-600">About Us</li>
          <li className="cursor-pointer hover:text-gray-600">Contact Us</li>
        </ul>
      </div>
    )}
    </div>
  )
}

export default Navbar
