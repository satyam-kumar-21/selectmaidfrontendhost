import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryCard from './GalleryCard'; // Adjust the import path based on your project structure

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const apiUrl = "https://selectmaidbackendhost-27wu8jxlb-satyam-kumar-21s-projects.vercel.app/"

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get(`${apiUrl}/gallery/all-galleries`); // Replace with your backend route
        if (!response.data) {
          throw new Error('Failed to fetch gallery items');
        }
        setGalleryItems(response.data);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <section id='gallery' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <GalleryCard
                key={index}
                imageUrl={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
