import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Research() {
  const [researches, setResearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResearches, setFilteredResearches] = useState([]); 

  useEffect(() => {
    async function fetchResearches() {
      try {
        const response = await fetch('/api/research/read');
        if (!response.ok) {
          const errorMessage = `Failed to fetch researches: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        const initializedResearches = data.map(research => ({
          ...research,
          currentPictureIndex: 0
        }));
        setResearches(initializedResearches);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchResearches();
  }, []);

  useEffect(() => {

    const filtered = researches.filter(research => 
      research.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      research.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredResearches(filtered);
  }, [searchInput, researches]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const prevPicture = (index) => {
    setResearches(prevResearches =>
      prevResearches.map((research, i) => {
        if (i === index) {
          const newIndex = research.currentPictureIndex === 0 ? research.imgUrls.length - 1 : research.currentPictureIndex - 1;
          return { ...research, currentPictureIndex: newIndex };
        }
        return research;
      })
    );
  };

  const nextPicture = (index) => {
    setResearches(prevResearches =>
      prevResearches.map((research, i) => {
        if (i === index) {
          const newIndex = research.currentPictureIndex === research.imgUrls.length - 1 ? 0 : research.currentPictureIndex + 1;
          return { ...research, currentPictureIndex: newIndex };
        }
        return research;
      })
    );
  };

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

      <br /><br /><br/>

      <div className='bg-slate-200 w-80 p-3 rounded-lg items-center flex '>
        <input 
          type="text"
          placeholder='Search...'
          className='bg-transparent focus:outline-none w-24 sm:w-64'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <FaSearch className='text-green-700 mt-'/>
      </div>

      <br /><br />

      {filteredResearches.length === 0 && <div className='font-semibold'>No results found.</div>}


      {filteredResearches.map((research, index) => (
        <div key={index} className="relative mb-8">
          <button className="absolute top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 ml-8" onClick={() => prevPicture(index)}>{'<'}</button>
          <button className="absolute top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 ml-72" onClick={() => nextPicture(index)}>{'>'}</button>
          <div className="border border-gray-300 p-4">
            <div className="flex items-center mb-2">
              <img src={research.imgUrls[research.currentPictureIndex]} alt="Research picture" className="w-80 h-80 object-cover rounded mr-4" />
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
