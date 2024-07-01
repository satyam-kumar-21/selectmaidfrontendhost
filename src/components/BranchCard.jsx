import React from 'react';

const BranchCard = ({ name, address, phone, email, image }) => {
  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
      <img src={image} alt={name} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Address:</strong> {address}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Phone:</strong> {phone}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default BranchCard;
