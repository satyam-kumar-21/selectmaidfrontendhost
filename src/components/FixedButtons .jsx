import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FixedButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-row space-x-4 z-50">
      <a
        href="tel:+917290021461"
        className="bubble bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
        title="Call"
      >
        <FaPhoneAlt size={24} />
      </a>
      <a
        href="https://wa.me/917290021461"
        target="_blank"
        rel="noopener noreferrer"
        className="bubble bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
        title="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FixedButtons;
