import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BranchCard from './BranchCard'; // Adjust the import path based on your project structure

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const apiUrl = "https://selectmaidbackendhost.vercel.app"

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(`${apiUrl}/branch/get-all-branches`); // Replace with your backend route
        if (!response.data) {
          throw new Error('Failed to fetch branches');
        }
        setBranches(response.data);
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    };

    fetchBranches();
  }, []);

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
