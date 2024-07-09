import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CityHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full bg-gray-900 text-white shadow-md ">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-red-500 dark:text-red-500 font-black text-3xl">
          Select Maid
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-white uppercase text-lg hidden lg:flex items-center">
            <Link to="/" className="py-2 px-4">Home</Link>
            <Link to="/maid-in-delhi" className="py-2 px-4">Delhi</Link>
            <Link to="/maid-in-noida" className="py-2 px-4">Noida</Link>
            <Link to="/maid-in-gurugram" className="py-2 px-4">Gurugram</Link>
          </nav>
          <button onClick={toggleMenu} className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1 bg-white mb-1"></span>
            <span className="w-6 h-1 bg-white mb-1"></span>
            <span className="w-6 h-1 bg-white mb-1"></span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center z-40">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-2xl">
            ✕
          </button>
          <nav className="flex flex-col text-white uppercase text-lg space-y-4">
            <Link to="/" className="py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/maid-in-delhi" className="py-2" onClick={toggleMenu}>Delhi</Link>
            <Link to="/maid-in-noida" className="py-2" onClick={toggleMenu}>Noida</Link>
            <Link to="/maid-in-gurugram" className="py-2" onClick={toggleMenu}>Gurugram</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default CityHeader;
