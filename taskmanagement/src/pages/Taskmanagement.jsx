import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [taskDetails, setTaskDetails] = useState(null); // Initialize taskDetails as null

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

  // Sample task object for demonstration
  const sampleTask = {
    id: 1,
    name: 'Sample Task',
    description: 'This is a sample task description.',
  };

  const handleTaskDetails = (task) => {
    setTaskDetails(task);
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="w-1/2 mt-8 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          
        </span>
        <input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search here...  "
  className="w-full px-10 py-4 border rounded-lg focus:outline-none focus:border-blue-500 flex items-center relative"
/>
<span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
  <FaSearch className="text-gray-400" />
</span>

        <button
          onClick={handleSearch}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>

        {searchResults.length > 0 && (
          <ul className="mt-4">
            {searchResults.map((result, index) => (
              <li key={index}>
                {result}{' '}
                <button onClick={() => handleTaskDetails(sampleTask)}>
                  View Details
                </button>
              </li>
            ))}
          </ul>
        )}
        {searchResults.length === 0 && <p className="mt-4">No results found.</p>}

        {/* Table to display task details */}
        {taskDetails && (
          <table className="mt-4 w-full">
            <thead>
              <tr>
                <th>Task ID</th>
                <th>Task Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{taskDetails.id}</td>
                <td>{taskDetails.name}</td>
                <td>{taskDetails.description}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
