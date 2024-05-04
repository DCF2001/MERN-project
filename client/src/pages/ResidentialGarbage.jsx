import React from 'react';
import { Link } from 'react-router-dom';

const ResidentialGarbageCollection = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Residential Garbage Collection Service</h2>
        <img src="/residential_garbage_collection.jpg" alt="Residential Garbage Collection" className="mb-4 rounded-lg shadow-md" />
        <p className="text-lg text-gray-700 mb-6">
          Our Residential Garbage Collection service ensures timely and efficient disposal of household waste. We offer customizable plans to meet your specific needs, whether you require weekly, bi-weekly, or monthly pickups.
        </p>
        <div>
          
          <Link to="/purchase" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResidentialGarbageCollection;
