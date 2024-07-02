import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review'; // Adjust the import path based on your project structure

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const apiUrl = "https://selectmaidbackendhost.vercel.app"

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${apiUrl}/rating/get-all-ratings`); // Replace with your backend route
        if (!response.data) {
          throw new Error('Failed to fetch reviews');
        }
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id='reviews' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Review
                key={index}
                name={review.name}
                text={review.description}
                rating={review.rating}
                imageUrl={review.image} // Ensure your backend API returns an 'imageUrl' field for each review
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
