import React from 'react';
import { Link } from 'react-router-dom';

const OrganicWasteCompost = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Organic Waste Composting Service</h2>
        <img src="/composteImage.jpg" alt="Residential Garbage Collection" className="mb-4 rounded-lg shadow-md" />
        <p className="text-lg text-gray-700 mb-6">
        Organic waste composting is an eco-friendly method of recycling organic materials like food scraps, yard waste, and agricultural residues into nutrient-rich compost. By diverting organic waste from landfills and incinerators, composting helps reduce greenhouse gas emissions and enriches soil health. Our composting programs offer a convenient and sustainable solution for managing organic waste, turning it into a valuable resource for gardens, farms, and landscaping. Whether you're a homeowner, business owner, or community organization, our composting services provide an environmentally responsible way to dispose of organic waste while contributing to a greener future.
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

export default OrganicWasteCompost;
