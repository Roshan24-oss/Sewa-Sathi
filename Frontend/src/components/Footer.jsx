import React from "react";
import{FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-blue-400 text-white   w-full border rounded-xl-lg shadow-blue-800 ">
      <h3 className="text-center pt-4 text-lg font-bold text-black ">𝐒𝐞𝐰𝐚𝐒𝐚𝐭𝐡𝐢</h3>

     <p className="text-center font-bold text-black">Book Home Services just with some clicks! </p> 

      <div className="flex gap-2 items-center justify-center text-2xl py-4">
        <span>
          <a href=""><FaFacebook className="text-black"/></a>
        </span>
        <span>
          <a href=""><FaInstagram className="text-black"/></a>
        </span>
        <span>
          <a href=""><FaLinkedin className="text-black"/></a>
        </span>
      </div>

     <div className="flex flex-col items-center gap-2 px-4 sm:flex-row sm:gap-4 sm:px-20 md:px-40 lg:px-60 justify-center pb-4">
  <span className="text-base font-semibold sm:text-lg">
    Terms and Conditions
  </span>
  <span className="hidden sm:inline">•</span>
  <span className="text-base font-semibold sm:text-lg">
    Privacy Policy
  </span>
</div>

      <div className="text-center font-serif">©2026 SewaSathi || All rights reserved</div>
    </div>
    
  );
};

export default Footer;
