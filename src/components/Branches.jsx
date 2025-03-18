import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BranchCard from './BranchCard'; // Adjust the import path based on your project structure
import { useSelector } from 'react-redux';

const Branches = () => {
 
  const branches = useSelector((state) => state.branch.branch);

  return (
    <section id='branches' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <BranchCard
                key={index}
                name={branch.name}
                address={branch.address}
                phone={branch.phone}
                email={branch.email}
                image={branch.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
