
import React from 'react';

const UpdateCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt="Update Image"
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default UpdateCard;
