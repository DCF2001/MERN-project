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
  const [price, setPrice] = useState('');
  const [isProduct, setIsProduct] = useState(false);
  const [importance, setImportance] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


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
      setImgUrls(selectedResearch.imgUrls || []); 
      setPrice(selectedResearch.price || '');
      setIsProduct(selectedResearch.isProduct || false);
      setImportance(selectedResearch.importance || ''); 
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
        imgUrls,
        price,
        isProduct,
        importance
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
        setSuccessMessage(data.message);
        fetchResearches();
        window.alert('Update Successful');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center my-7 text-green-900">Update Research</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4">
          <label className="font-semibold flex-1 ">
            Research ID:
            <select className="border border-gray-300 rounded px-2 py-1 ml-2  " value={researchId} onChange={(e) => handleUpdateClick(e.target.value)}>
              <option value="">Select Research ID</option>
              {researches.map((research) => (
                <option key={research.researchId} value={research.researchId}>
                  {research.researchId}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Update</button>
        </div>
        <input className="border border-gray-300 rounded px-4 py-2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border border-gray-300 rounded px-4 py-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border border-gray-300 rounded px-4 py-2" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <textarea className="border border-gray-300 rounded px-4 py-2" rows="4" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className="border border-gray-300 rounded px-4 py-2" type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />

        <select id="category" className="border border-gray-300 rounded px-4 py-2"  value={category} onChange={(e) => setCategory(e.target.value)}>
          {['Environmental Science', 'Waste Management', 'Public Health', 'Urban Planning', 'Engineering', 'Policy and Governance', 'Social Sciences', 'Economics', 'Technology and Innovation', 'Education and Outreach'].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="checkbox" checked={composting} onChange={(e) => setComposting(e.target.checked)} />
            <span className="ml-2">Composting</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={reducing} onChange={(e) => setReducing(e.target.checked)} />
            <span className="ml-2">Reducing</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={donating} onChange={(e) => setDonating(e.target.checked)} />
            <span className="ml-2">Donating</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={energy} onChange={(e) => setEnergy(e.target.checked)} />
            <span className="ml-2">Energy</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={reuse} onChange={(e) => setReuse(e.target.checked)} />
            <span className="ml-2">Reuse</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={other} onChange={(e) => setOther(e.target.checked)} />
            <span className="ml-2">Other</span>
          </label>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="checkbox" checked={isProduct} onChange={(e) => setIsProduct(e.target.checked)} />
            
            <span className="ml-2">IS Product</span>
          </label>
        </div>
        {isProduct && (
          <>
            <input className="border border-gray-300 rounded px-4 py-2 w-full" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <textarea className="border border-gray-300 rounded px-4 py-2 w-full" rows="4" placeholder="Importance" value={importance} onChange={(e) => setImportance(e.target.value)} />
          </>
        )}
      </form>
    </div>
  );
};

export default UpdateResearch;
