import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  // Use useSelector to get the aboutData from Redux store
  const aboutData = useSelector((state) => state.about.about);  // Adjust the path based on your store structure

  // If aboutData is not available yet, you can show a loading message or a placeholder
  if (!aboutData) {
    return <div>Loading...</div>;  // Optional: Replace this with a spinner or other loading indicator
  }

  return (
    <section id="about" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-8 text-center">
          {/* You can add a title or some content here */}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
              About us
            </h2>
            <p className="text-gray-700 dark:text-white leading-relaxed mb-8">
              {aboutData.description1}
            </p>
            <p className="text-gray-700 dark:text-white leading-relaxed mb-8">
              {aboutData.description2}
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
            <img
              src={aboutData.image}
              className="rounded-lg shadow-lg max-w-full h-auto"
              alt={aboutData.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
