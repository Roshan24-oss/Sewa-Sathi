import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-amber-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div onClick={handleLogoClick} className="cursor-pointer">
          <img src={logo} alt="logo" className="h-12" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          <Link to="/moreinfo" className="font-medium">
            थप जानकारी
          </Link>

          <Link to="/contact" className="font-medium">
            ContactUs
          </Link>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 font-semibold"
              >
                <FaUserCircle size={28} className="text-orange-600" />
                {user.fullName}
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg py-2 text-sm">

                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="bg-orange-600 px-4 py-1 rounded-xl text-white font-semibold hover:bg-orange-700"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">

          <Link
            to="/moreinfo"
            className="block font-medium"
            onClick={() => setIsOpen(false)}
          >
            थप जानकारी
          </Link>

          <Link
            to="/contact"
            className="block font-medium"
            onClick={() => setIsOpen(false)}
          >
            ContactUs
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                className="block font-medium"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </Link>

              <button
                onClick={handleLogout}
                className="block w-full bg-red-500 text-white rounded-xl px-4 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              className="block bg-orange-600 rounded-xl px-4 py-2 text-white text-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
