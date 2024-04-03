import React, { useState, useEffect } from 'react';

export default function Research() {
  const [researches, setResearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResearches() {
      try {
        const response = await fetch('/api/research/read');
        if (!response.ok) {
          throw new Error('Failed to fetch researches');
        }
        const data = await response.json();
        setResearches(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchResearches();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 text-green-800'>Research Hub</h1>
      <span className='text-lg text-green-700'>Welcome to the Research Hub: Where Ideas Flourish, Innovations Blossom, and Transformative Solutions Emerge for the Future of Garbage Management.</span>

      <br /><br />

      <div>
        {researches.map(research => (
          <div key={research._id} className="border border-gray-300 p-4 mb-4">
            <div className="flex items-center mb-2">
              
              <img src={research.imgUrls[0]} alt="Research picture" className="w-20 h-20 object-cover rounded mr-4" />

            
              <h2 className="text-xl font-semibold">{research.title}</h2>
            </div>

        
            <p className="text-gray-600 mb-2">Category: {research.category}</p>

            <p className="text-gray-700">{research.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
