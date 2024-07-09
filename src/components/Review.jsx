import React from 'react';

const Review = ({ name, text, rating, imageUrl }) => {
  // Function to render stars based on rating
  const renderStars = () => {
    const stars = [];
    const maxRating = 5; // Maximum rating stars

    // Fill stars array based on rating
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className="text-gray-400">&#9733;</span>); // Empty star
      }
    }

    return stars;
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={imageUrl} // Use the imageUrl prop
              alt="select-maid-customer-review"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
            {rating && (
              <div className="text-yellow-500 flex">
                {renderStars()}
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-700 dark:text-white leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default Review;
