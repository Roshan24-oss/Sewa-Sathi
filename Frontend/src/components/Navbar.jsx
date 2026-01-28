import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-amber-200 flex flex-row justify-between items-center px-10 fixed top-0 shadow-amber-800">
      <div className="h-16 w-20 round mt-1 position-fixed"><img src={logo} alt="logo" /></div>
      <div className="w-full max-w-md border-2 rounded bg-white px-4 md:px-10 gap-4 md:gap-10 py-2 flex items-center">
        <input
          type="text"
          placeholder="plumber,electrician..."
          className="flex-1 focus:outline-none focus:ring-2 "
        />
      </div>
      <div className="flex flex-row gap-10 text-lg px-12">
        <span className="hover:text-blue-600 cursor-pointer">थप जानकारी</span>
        <span>Contact Us</span>
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default Navbar;
