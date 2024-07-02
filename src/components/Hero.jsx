import React, { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
            Select Maid
          </div>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg hidden lg:flex items-center">
              <a href="#overview" className="py-2 px-4" onClick={closeMenu}>
                Overview
              </a>
              <a href="#about" className="py-2 px-4" onClick={closeMenu}>
                About
              </a>
              <a href="#new-update" className="py-2 px-4" onClick={closeMenu}>
                New Updates
              </a>
              <a href="#gallery" className="py-2 px-4" onClick={closeMenu}>
                Gallery
              </a>
              <a href="#reviews" className="py-2 px-4" onClick={closeMenu}>
                Review
              </a>
              <a href="#services" className="py-2 px-4" onClick={closeMenu}>
                Services
              </a>
              <a href="#branches" className="py-2" onClick={closeMenu}>
                Branches
              </a>
              <a href="#contact" className="py-2 px-4" onClick={closeMenu}>
                Contact
              </a>
            </nav>
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col ml-4"
            >
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-40">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
            <nav className="flex flex-col text-white uppercase text-lg space-y-4">
              <a href="#overview" className="py-2" onClick={closeMenu}>
                Overview
              </a>
              <a href="#about" className="py-2" onClick={closeMenu}>
                About
              </a>
              <a href="#new-update" className="py-2" onClick={closeMenu}>
                New Updates
              </a>
              <a href="#gallery" className="py-2" onClick={closeMenu}>
                Gallery
              </a>
              <a href="#reviews" className="py-2" onClick={closeMenu}>
                Review
              </a>
              <a href="#services" className="py-2" onClick={closeMenu}>
                Services
              </a>
              <a href="#branches" className="py-2" onClick={closeMenu}>
                Branches
              </a>
              <a href="#contact" className="py-2" onClick={closeMenu}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
      <div
        className={`bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden ${
          isMenuOpen ? "blur" : ""
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative py-8 lg:py-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative z-20 text-center lg:text-left">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-8 lg:mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl lg:text-3xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Spotless Reliable
              <span className="text-4xl sm:text-5xl lg:text-7xl">Trusted</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4 lg:mt-8">
            Your premier choice for pristine homes. We specialize in meticulous cleaning services tailored to exceed your expectations with every visit.
            </p>
            <div className="flex mt-8">
              <a
                href="https://wa.me/+917290021461"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase py-2 px-4 rounded-lg bg-green-500 border-2 border-transparent text-white text-md mr-4 hover:bg-green-400"
              >
                Book Now (WhatsApp)
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mb-8 lg:mb-0">
            <img
              src="https://content.jdmagicbox.com/comp/delhi/t9/011pxx11.xx11.220621160256.z9t9/catalogue/s-k-placement-service-centre-ashok-vihar-delhi-placement-services-for-maids-for-employers--zm1wzb9hc7.jpg"
              className="max-w-xs md:max-w-sm"
              alt="Watch Illustration"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
