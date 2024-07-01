import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateCard from './UpdateCard'; // Adjust the import path based on your project structure

const NewUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const apiUrl = "https://selectmaidbackendhost-27wu8jxlb-satyam-kumar-21s-projects.vercel.app/"

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get(`${apiUrl}/new-update/get-all-new-updates`); // Replace with your backend route
        if (!response.data) {
          throw new Error('Failed to fetch updates');
        }
        setUpdates(response.data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <section id='new-update' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            New Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <UpdateCard
                key={index}
                imageUrl={update.image}
                title={update.heading}
                description={update.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewUpdates;
