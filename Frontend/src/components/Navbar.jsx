import React, { useState } from "react";
import {Link} from "react-router-dom";
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
        <div className="hidden md:flex gap-8 items-center text-lg">

          {/* Desktop underline only */}
          <a href="#" className="relative group font-medium">
            थप जानकारी
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 
                             transition-all duration-300 
                             md:group-hover:w-full md:group-hover:left-0"></span>
          </a>

          {/* Desktop underline only */}
          <a href="#" className="relative group font-medium">
            Contact Us
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-600 
                             transition-all duration-300 
                             md:group-hover:w-full md:group-hover:left-0"></span>
          </a>

          {/* Button */}
  <Link
          
          to="/signin"
          
          className="shadow-md bg-orange-600 rounded-xl px-4 py-1 text-white font-semibold hover:bg-orange-700 transition">Sign In</Link>
          
        
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

          {/* Mobile links (NO hover effect) */}
          <a href="#" className="block font-medium">
            थप जानकारी
          </a>

          <a href="#" className="block font-medium">
            Contact Us
          </a>

      
          <Link
          to="/signin" className="block shadow-md bg-orange-600 rounded-xl px-4 py-2 
                       text-white text-center font-bold hover:bg-orange-700 transition"
          >Sign In</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
