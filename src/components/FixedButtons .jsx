import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FixedButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-row space-x-2 z-50">
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out animate-bounce"
        title="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="tel:yourphonenumber"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out animate-bounce"
        title="Call"
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
};

export default FixedButtons;
