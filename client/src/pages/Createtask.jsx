import React from 'react';

const GarbageCollectionForm = () => {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 mt-8">
        <div className="bg-green-800 p-8 rounded shadow-md" style={{ backgroundColor: '#114232' }}>
          <h2 className="text-4xl font-bold mb-6 text-center text-white">Garbage Collection Service Request Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-white">Name:</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" required />
            </div>
            {/* Add other form fields here */}
            <div className="mb-4">
              <label htmlFor="propertyType" className="block mb-2 text-white">Property Type:</label>
              <select id="propertyType" name="propertyType" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" required>
                <option value="">Select Property Type</option>
                <option value="home">Home</option>
                <option value="business">Business/Organization</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="serviceType" className="block mb-2 text-white">Choose the Service:</label>
              <select id="serviceType" name="serviceType" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" required>
                <option value="">Select Service</option>
                {/* Options for Home */}
                <optgroup label="Home Services">
                  <option value="recyclingPickup">Waste Recycling Pickup</option>
                  <option value="bulkyItemPickup">Bulky Item Pickup</option>
                  <option value="dumpsterRental">Dumpster Rental</option>
                  <option value="apartments">Apartments, Condos & HOAs</option>
                  <option value="municipalities">Municipalities</option>
                  <option value="portableToilets">Portable Toilets</option>
                  <option value="other">Something Else</option>
                </optgroup>
                {/* Options for Business/Organization */}
                <optgroup label="Business/Organization Services">
                  <option value="wasteRecycling">Waste and Recycling Pickup</option>
                  <option value="dumpsterRentalBusiness">Dumpster Rental</option>
                  <option value="apartmentsBusiness">Apartments, Condos & HOAs</option>
                  <option value="compactors">Compactors and Industrial Waste</option>
                  <option value="municipalitiesBusiness">Municipalities</option>
                  <option value="portableToiletsBusiness">Portable Toilets</option>
                  <option value="otherBusiness">Something Else</option>
                </optgroup>
              </select>
            </div>
            {/* Text input for 'Something Else' option */}
            <div className="mb-4">
              <label htmlFor="otherService" className="block mb-2 text-white">Enter Other Service:</label>
              <input type="text" id="otherService" name="otherService" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 focus:outline-none">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GarbageCollectionForm;
