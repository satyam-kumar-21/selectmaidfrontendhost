import React from 'react';

const Overview = () => {
  return (
    <section id='overview' className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Select Maid
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
        We're dedicated to transforming your space with top-notch cleaning services. Whether it's for your home or office, trust us for reliability, quality, and a commitment to exceeding your cleanliness expectations.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 py-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
              Customized Cleaning Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
              Personalized services tailored to your specific cleaning needs for thorough and efficient results every time.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
              Trained Professionals
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
              Experienced cleaners committed to delivering high-quality service with attention to detail and efficiency.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
              Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
              We ensure your complete satisfaction with our meticulous cleaning and dedication to exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
