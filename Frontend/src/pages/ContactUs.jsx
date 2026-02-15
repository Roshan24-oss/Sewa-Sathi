import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600">
          Get In Touch with Us
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          हामीसँग सम्पर्क गर्नुहोस्
        </p>
      </div>

      {/* Social Media */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="#"
          className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-pink-500 p-3 rounded-full text-white hover:scale-110 transition duration-300"
        >
          <GrInstagram />
        </a>
        <a
          href="#"
          className="bg-green-500 p-3 rounded-full text-white hover:scale-110 transition duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        
        {/* Email */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <MdEmail className="text-red-500 text-3xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-blue-600">Email</h2>
          <p className="text-gray-600 mt-2 text-sm">
            sewasathi@gmail.com <br />
            sewasathi-support@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <FaPhoneAlt className="text-green-500 text-3xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-blue-600">
            Contact Numbers
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            +977 9800000000 <br />
            +977 9800000001 <br />
            0945452-25
          </p>
        </div>

        {/* Address */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
          <FaMapMarkerAlt className="text-blue-500 text-3xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-blue-600">Address</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Lainchaur-26, Kathmandu, Nepal
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-20 max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Phone
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="+977 98xxxxxxxx"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  );
};

export default ContactUs;
