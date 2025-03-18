import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateCard from './UpdateCard'; // Adjust the import path based on your project structure
import { useSelector } from 'react-redux';

const NewUpdates = () => {
 

  const updates = useSelector((state) => state.newupdate.newUpdates); 

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
