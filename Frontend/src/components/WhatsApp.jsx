import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9779761811885";
  const message = "Hello, I want to know more about your services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-105">
        
        {/* Icon */}
        <FaWhatsapp className="text-2xl animate-pulse" />

        {/* Text */}
        <div className="ml-3 leading-tight">
          <p className="text-sm font-semibold">Chat with us</p>
          <p className="text-xs opacity-80">9761811885</p>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
