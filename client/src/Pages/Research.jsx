import React, { useState, useEffect } from 'react';

export default function Research() {
  const [researches, setResearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentResearchIndex, setCurrentResearchIndex] = useState(0);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

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

  const prevPicture = () => {
    setCurrentPictureIndex(currentPictureIndex === 0 ? researches[currentResearchIndex].imgUrls.length - 1 : currentPictureIndex - 1);
  };

  const nextPicture = () => {
    setCurrentPictureIndex(currentPictureIndex === researches[currentResearchIndex].imgUrls.length - 1 ? 0 : currentPictureIndex + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentResearch = researches[currentResearchIndex];
  const currentPicture = currentResearch.imgUrls[currentPictureIndex];

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 text-green-800'>Research Hub</h1>
      <span className='text-lg text-green-700'>Welcome to the Research Hub: Where Ideas Flourish, Innovations Blossom, and Transformative Solutions Emerge for the Future of Garbage Management.</span>

      <br /><br />

      {researches.map((research, index) => (
        <div key={index} className="relative mb-8">
          <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2" onClick={() => setCurrentPictureIndex(currentPictureIndex === 0 ? research.imgUrls.length - 1 : currentPictureIndex - 1)}>{'<'}</button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2" onClick={() => setCurrentPictureIndex(currentPictureIndex === research.imgUrls.length - 1 ? 0 : currentPictureIndex + 1)}>{'>'}</button>
          <div className="border border-gray-300 p-4">
            <div className="flex items-center mb-2">
              <img src={research.imgUrls[currentPictureIndex]} alt="Research picture" className="w-40 h-40 object-cover rounded mr-4" />
              <div>
                <h2 className="text-xl font-semibold">{research.title}</h2>
                <p className="text-gray-600 mb-2">Category: {research.category}</p>
                <p className="text-gray-700">{research.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
