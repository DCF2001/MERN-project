import React from 'react';
import { Link } from 'react-router-dom';

export default function RproductsHeader() {
  return (
    <div>
      <header className="bg-gray-100 border-b border-gray-200 py-4 px-8 flex justify-between items-center mt-8">
        <h1 className="text-2xl font-semibold text-gray-800"></h1>
        <nav>
          <ul className="flex space-x-6">

          <li>
              <Link to="/Research" className="text-gray-600 hover:text-gray-800 transition duration-300 font-semibold">Research Hub</Link>
            </li>

            <li>
              <Link to="/PProduct" className="text-gray-600 hover:text-gray-800 transition duration-300 font-semibold">Research Market Place</Link>
            </li>
          
          </ul>
        </nav>
      </header>
    </div>
  );
}
