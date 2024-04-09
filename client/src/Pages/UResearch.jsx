import React, { useState, useEffect } from 'react';

const UpdateResearch = () => {
  const [researches, setResearches] = useState([]);
  const [researchId, setResearchId] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [composting, setComposting] = useState(false);
  const [reducing, setReducing] = useState(false);
  const [donating, setDonating] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [reuse, setReuse] = useState(false);
  const [other, setOther] = useState(false);
  const [imgUrls, setImgUrls] = useState([]);
  const [approved, setApproved] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchResearches();
  }, []);

  const fetchResearches = async () => {
    try {
      const response = await fetch('/api/research/read');
      const data = await response.json();
      setResearches(data);
    } catch (error) {
      console.error('Error fetching researches:', error);
    }
  };

  const handleUpdateClick = (id) => {
    setResearchId(id);
    const selectedResearch = researches.find((research) => research.researchId === id);
    if (selectedResearch) {
      setTitle(selectedResearch.title);
      setName(selectedResearch.name);
      setAddress(selectedResearch.address);
      setDescription(selectedResearch.description);
      setDate(selectedResearch.date);
      setCategory(selectedResearch.category);
      setComposting(selectedResearch.composting);
      setReducing(selectedResearch.reducing);
      setDonating(selectedResearch.donating);
      setEnergy(selectedResearch.energy);
      setReuse(selectedResearch.reuse);
      setOther(selectedResearch.other);
      setImgUrls(selectedResearch.imgUrls);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        title,
        name,
        address,
        description,
        date,
        category,
        composting,
        reducing,
        donating,
        energy,
        reuse,
        other,
        imgUrls
      };

      const response = await fetch(`/api/research/update/${researchId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        fetchResearches();
        window.alert(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Update Research</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Research ID:
          <select className="border border-gray-300 rounded px-2 py-1 ml-2" value={researchId} onChange={(e) => handleUpdateClick(e.target.value)}>
            <option value="">Select Research ID</option>
            {researches.map((research) => (
              <option key={research.researchId} value={research.researchId}>
                {research.researchId}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          Title:
          <input className="border border-gray-300 rounded px-2 py-1 ml-2" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="block mb-2">
          Name:
          <input className="border border-gray-300 rounded px-2 py-1 ml-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="block mb-2">
          Address:
          <input className="border border-gray-300 rounded px-2 py-1 ml-2" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label className="block mb-2">
          Description:
          <input className="border border-gray-300 rounded px-2 py-1 ml-2" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label className="block mb-2">
          Date:
          <input className="border border-gray-300 rounded px-2 py-1 ml-2" type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label className="block mb-2">
          Category:
          <input className="border border-gray-300 rounded px-2 py-1 ml-2" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        
        <label className="block mb-2">
          Composting:
          <input className="ml-2" type="checkbox" checked={composting} onChange={(e) => setComposting(e.target.checked)} />
        </label>
        <label className="block mb-2">
          Reducing:
          <input className="ml-2" type="checkbox" checked={reducing} onChange={(e) => setReducing(e.target.checked)} />
        </label>
        <label className="block mb-2">
          Donating:
          <input className="ml-2" type="checkbox" checked={donating} onChange={(e) => setDonating(e.target.checked)} />
        </label>
        <label className="block mb-2">
          Energy:
          <input className="ml-2" type="checkbox" checked={energy} onChange={(e) => setEnergy(e.target.checked)} />
        </label>
        <label className="block mb-2">
          Reuse:
          <input className="ml-2" type="checkbox" checked={reuse} onChange={(e) => setReuse(e.target.checked)} />
        </label>
        <label className="block mb-2">
          Other:
          <input className="ml-2" type="checkbox" checked={other} onChange={(e) => setOther(e.target.checked)} />
        </label>
        <label className="block mb-2">
          Image URLs:
          <input className="border border-gray-300 rounded px-2 py-1 ml-2" type="text" value={imgUrls} onChange={(e) => setImgUrls(e.target.value)} />
        </label>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">Update Research</button>
      </form>
    </div>
  );
};

export default UpdateResearch;
