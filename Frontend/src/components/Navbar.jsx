import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-amber-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Plumber, Electrician..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-blue-600">थप जानकारी</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
          <a href="#" className="hover:text-blue-600">Sign In</a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes size={24} className="text-blue-600" />
            ) : (
              <FaBars size={24} className="text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          
          {/* Mobile Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <a href="#" className="block hover:text-blue-600">थप जानकारी</a>
          <a href="#" className="block hover:text-blue-600">Contact Us</a>
          <a href="#" className="block hover:text-blue-600">Sign In</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
