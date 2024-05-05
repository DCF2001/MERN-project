import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import HeaderResearch from '../components/HeaderResearch';

export default function ResearchDetails() {
  const [researchList, setResearchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResearchList() {
      try {
        const response = await axios.get('http://localhost:3001/research/read'); // Use Axios get method
        setResearchList(response.data); // Axios automatically parses JSON response, so use response.data
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchResearchList();
  }, []);

  const handleRemoveResearch = async (researchId) => {
    try {
      await axios.delete(`http://localhost:3001/research/remove/${researchId}`); // Use Axios delete method directly
      alert('Research successfully deleted');
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <HeaderResearch/>
      <div>
        <h1 className='text-3xl font-semibold text-center my-7 text-green-800'>Research List</h1>
        <ul>
          {researchList.map(research => (
            <li key={research.researchId} className="border border-gray-300 p-4 mb-4">
              <h3 className="text-lg font-semibold">Research ID: {research.researchId}</h3>
              <p>Title: {research.title}</p>
              <p>Category: {research.category}</p>
              <p>Date: {research.date}</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveResearch(research.researchId)}>
                Remove Research
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
