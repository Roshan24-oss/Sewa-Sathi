import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen mt-20 p-5 bg-gray-50">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center">
        Get In Touch with Us <br />
        <span className="text-lg text-gray-700 font-normal">हामीसँग सम्पर्क गर्नुहोस्</span>
      </h1>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6 text-2xl">
        <a href="#" className="text-blue-600 hover:text-blue-800 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-700 transition">
          <GrInstagram />
        </a>
        <a href="#" className="text-green-500 hover:text-green-700 transition">
          <FaWhatsapp />
        </a>
      </div>

      {/* Contact Info */}
      <div className="mt-10 text-center space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-500">Email - इमेल</h2>
          <p className="text-gray-600 mt-1">
            sewasathi@gmail.com / sewasathi-support@gmail.com
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-500">Contact Numbers</h2>
          <p className="text-gray-600 mt-1">
            +977 9800000000 / +977 9800000001 / 0945452-25
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-500">Address - ठेगाना</h2>
          <p className="text-gray-600 mt-1">
            Lainchaur-26, Kathmandu, Nepal
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Send Us a Message
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="+977 980xxxxxxx"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactUs;
