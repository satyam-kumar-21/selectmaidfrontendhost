import React from 'react';

const GalleryCard = ({ imageUrl, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={description} className="w-full h-auto" />
      <div className="p-4">
        <p className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
          {description}
        </p>
        <p className="text-gray-600 dark:text-gray-400">{/* Additional text if needed */}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
