import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const apiUrl = "https://selectmaidbackendhost-27wu8jxlb-satyam-kumar-21s-projects.vercel.app/"

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${apiUrl}/service/get-all-services`); // Replace with your backend route
        if (!response.data) {
          throw new Error('Failed to fetch services');
        }
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id='services' className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <img
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    src={service.image}
                    alt="image"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.heading}</h3>
                </div>
                <p className="text-gray-700 dark:text-white leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
