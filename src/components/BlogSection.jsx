import React from 'react';
import BlogCard from './BlogCard'; // Adjust the import path based on your project structure

const BlogSection = () => {
  const dummyData = [
    {
      image: 'https://via.placeholder.com/400x300',
      heading: 'Blog Post 1',
      description: 'This is a short description of blog post 1.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      heading: 'Blog Post 2',
      description: 'This is a short description of blog post 2.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      heading: 'Blog Post 3',
      description: 'This is a short description of blog post 3.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      heading: 'Blog Post 4',
      description: 'This is a short description of blog post 4.'
    }
  ];

  return (
    <section id='blog' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dummyData.map((blog, index) => (
              <BlogCard
                key={index}
                imageUrl={blog.image}
                title={blog.heading}
                description={blog.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
