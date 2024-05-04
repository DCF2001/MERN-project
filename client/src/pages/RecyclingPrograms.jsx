/*import React from 'react';
import { Link } from 'react-router-dom';


const RecyclingPrograms = () => {

  return (
   
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center py-8">
        <div className="max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
           
          <div className="md:flex-shrink-0">
              <img src="/recycling_programs.jpeg" alt="Recycling Programs" className="w-full object-cover h-96 md:w-96 md:h-auto" />
            </div>
            
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Recycling Programs</div>
              <h2 className="mt-2 text-2xl leading-tight font-semibold text-gray-900">Promoting Sustainable Waste Management</h2>
              <p className="mt-2 text-gray-700">Our Recycling Programs are designed to promote sustainable waste management practices. We offer a variety of recycling initiatives, including single-stream recycling, e-waste recycling, and composting programs.</p>
              <div className="mt-4">
                <Link to="/purchase" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default RecyclingPrograms;
*/
import React from 'react';
import { Link } from 'react-router-dom';

const RecyclingPrograms  = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Recycling Programs Service</h2>
        <img src="/recycling_programs.jpeg" alt="Recycling Programs" className="w-86 h-auto mb-4 rounded-lg shadow-md" />
        <p className="text-lg text-gray-700 mb-6">
        Our Recycling Programs are meticulously designed to promote sustainable waste management practices. We offer a variety of initiatives, including single-stream recycling, e-waste recycling, and composting programs. These services provide convenient and eco-friendly solutions for individuals and businesses to reduce their environmental footprint and contribute to a healthier planet.
        </p>
        <p className="text-lg text-gray-700 mb-6">
        Single-stream recycling simplifies the process by allowing all recyclables to be placed in one bin, while our e-waste recycling ensures responsible disposal of electronic devices. Additionally, our composting programs transform organic waste into nutrient-rich compost, enriching soil and minimizing landfill waste. Join us in our commitment to a greener future through innovative recycling solutions.
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

export default RecyclingPrograms;

