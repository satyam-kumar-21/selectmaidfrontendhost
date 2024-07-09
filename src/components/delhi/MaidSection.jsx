import React from 'react';

const MaidSection = () => {
  const maids = [
    {
      name: 'Sunita Sharma',
      experience: '5 years of experience in household chores and cooking',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Aarti Verma',
      experience: '3 years of experience in babysitting and elderly care',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Rita Singh',
      experience: '4 years of experience in deep cleaning and organizing',
      image: 'https://via.placeholder.com/150',
    },
    
  ];

  return (
    <section id="maid-section" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Maids In Delhi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {maids.map((maid, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={maid.image} alt={maid.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{maid.name}</h3>
              <p className="mt-2">{maid.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaidSection;
