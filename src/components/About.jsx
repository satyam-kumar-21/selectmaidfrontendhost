import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const apiUrl = "https://selectmaidbackendhost.vercel.app"

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/about/get-about`); // Replace with your backend route
        if (!response.data) {
          throw new Error('Failed to fetch about data');
        }
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return null; // You can show a loading spinner or message here
  }

  return (
    <section id='about' className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
              {aboutData.title}
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
