import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
