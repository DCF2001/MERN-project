import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic here, such as fetching data from an API based on searchQuery
    // For simplicity, let's assume searchResults is updated with the search results

    // Example API call:
    // fetch(`https://api.example.com/search?q=${searchQuery}`)
    //   .then(response => response.json())
    //   .then(data => setSearchResults(data.results))
    //   .catch(error => console.error('Error fetching data:', error));

    // For demonstration purposes, let's mock search results
    const mockResults = ['Result 1', 'Result 2', 'Result 3'];
    setSearchResults(mockResults);
  };

  return (
    <div className="flex justify-center items-start min-h-screen" style={{ backgroundImage: 'url("taskmanagement\src\pages\pictures\pexels-jakub-novacek-924824.jpg")', backgroundSize: 'cover' }}>
      <div className="w-1/2 mt-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter your search query"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>

        {searchResults.length > 0 && (
          <ul className="mt-4">
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
        {searchResults.length === 0 && <p className="mt-4">No results found.</p>}
      </div>
    </div>
  );
};

export default SearchComponent;
