import { useState } from "react";
import React from 'react';
import shortid from "shortid";

export default function Research() {
  // Initialize current date
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [maxPhotosError, setMaxPhotosError] = useState(false);
  const [minPhotosError, setMinPhotosError] = useState(false);

  const [formData, setFormData] = useState({
    imgUrls: [],
    name: '',
    researchId: shortid.generate(),
    address: '',
    title: '',
    description: '',
    date: formattedDate,
    category: '',
    composting: false,
    reducing: false,
    donating: false,
    energy: false,
    reuse: false,
    other: false,
  });

  const categories = [
    "Environmental Science",
    "Waste Management",
    "Public Health",
    "Urban Planning",
    "Engineering",
    "Policy and Governance",
    "Social Sciences",
    "Economics",
    "Technology and Innovation",
    "Education and Outreach"
  ];

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    // Handle select dropdown change
    if (id === 'category') {
      setFormData({
        ...formData,
        category: value
      });
    }
    // Handle checkbox changes
    else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [id]: checked
      });
    }
    // Handle text input changes
    else if (type === 'text' || type === 'textarea') {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Check max photos condition
    if (selectedFiles.length + imageFiles.length > 6) {
      setMaxPhotosError(true);
      return;
    } else {
      setMaxPhotosError(false);
    }

    // Check min photos condition
    if (selectedFiles.length === 0 && imageFiles.length === 0) {
      setMinPhotosError(true);
      return;
    } else {
      setMinPhotosError(false);
    }

    // Update image previews
    const previews = selectedFiles.map(file => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]);

    // Update image files
    setImageFiles([...imageFiles, ...selectedFiles]);

    // Update image URLs in formData
    const fileUrls = previews.map((preview) => preview);
    setFormData({
      ...formData,
      imgUrls: [...formData.imgUrls, ...fileUrls], // update imgUrls
    });
  };

  const handleDeleteImage = (index) => {
    const updatedImageFiles = [...imageFiles];
    updatedImageFiles.splice(index, 1);

    const updatedImagePreviews = [...imagePreviews];
    updatedImagePreviews.splice(index, 1);

    setImageFiles(updatedImageFiles);
    setImagePreviews(updatedImagePreviews);

    // Update image URLs in formData
    const fileUrls = updatedImagePreviews.map((preview) => preview);
    setFormData({
      ...formData,
      imgUrls: fileUrls, // update imgUrls
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check min photos condition before submitting
    if (imageFiles.length === 0) {
      setMinPhotosError(true);
      return;
    } else {
      setMinPhotosError(false);
    }

    // Check if at least one checkbox is checked
    if (
      !formData.composting &&
      !formData.reducing &&
      !formData.donating &&
      !formData.energy &&
      !formData.reuse &&
      !formData.other
    ) {
      setError('Please select at least one checkbox.');
      return;
    }

    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/research/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to create research');
      }

      setLoading(false);
      setFormSubmitted(true);
      setTimeout(() => {
        window.location.reload();
      }, 8000); 
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <br></br>
      <h1 className='text-3xl font-semibold text-center my-7 text-green-800'>Research Hub</h1>
      <span className='text-lg text-green-700'>Welcome to the Research Hub: Where Ideas Flourish, Innovations Blossom, and Transformative Solutions Emerge for the Future of Garbage Management.</span>

      <br /><br />
      {/* Form for data input */}
      <form className='flex flex-col' onSubmit={handleSubmit}>
         {/* Input field for researchId */}
         <div className=''>
           <span className="font-semibold">Research User Id : </span>
           <input
              placeholder='Research Id'
              className=' text-slate-400 font-semibold text-center border p-3 rounded-lg w-56 '
              id='researchId'
              required
              readOnly
              defaultValue={formData.researchId}
            />
          <br/><br/>
        </div>

        <div className='flex flex-col gap-4 flex-1'>
          {/* Input field for Name */}
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength={62}

            required
            onChange={handleChange}
            value={formData.name}
          />
         
          {/* Input field for Address */}
          <input
            type='text'
            placeholder='Address'
            className='border p-3 rounded-lg'
            id='address'
            maxLength={62}
            required
            onChange={handleChange}
            value={formData.address}
          />

          {/* Input field for Title */}
          <input
            type='text'
            placeholder='Title'
            className='border p-3 rounded-lg'
            id='title'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.title}
          />

          {/* Input field for Description */}
          <textarea
            placeholder='Description'
            className='border p-8 rounded-lg'
            id='description'
            maxLength={1000}
            required
            onChange={handleChange}
            value={formData.description}
          />

          {/* Input field for Date */}
          <input
            type='text'
            placeholder='Date'
            className='border p-3 rounded-lg'
            id='date'
            required
            value={formData.date}
          />

          <select 
            id="category"
            className="border p-3 rounded-lg"
            onChange={handleChange}
            value={formData.category}
          >
            <option value="" className="">Select the Garbage Management Research Categories </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Section for waste reduction practice checkboxes */}
        <br />
        <span className='text-green-700 font-semibold'>
          Select the checkboxes for waste reduction practices you have implemented for this research:
        </span>
        <br/>
        <div className='flex gap-6 flex-wrap'>
          <div className='flex gap-2'>
            <input type="checkbox" id='composting' className='w-5' onChange={handleChange} checked={formData.composting} />
            <span className='font-semibold'>Composting  </span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='reducing' className='w-5' onChange={handleChange} checked={formData.reducing} />
            <span className='font-semibold'>Reducing Plastic Usage</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='donating' className='w-5' onChange={handleChange} checked={formData.donating} />
            <span className='font-semibold'>Donating Items</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='energy' className='w-5' onChange={handleChange} checked={formData.energy} />
            <span className='font-semibold'>Energy Conservation</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='reuse' className='w-5' onChange={handleChange} checked={formData.reuse} />
            <span className='font-semibold'>Reuse of Items</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='other' className='w-5' onChange={handleChange} checked={formData.other} />
            <span className='font-semibold'>Other</span>
          </div>
        </div>

        {/* Section for file upload */}
        <br />
        <div className='flex flex-col flex-1 '>
          <p className='font-bold'>Images: <span className='font-normal text-gray-900 ml-2'>The first page will be the cover (max 6)</span></p>
          <br />
          {/* Error messages for file upload */}
          {maxPhotosError && <p className="text-red-700 text-sm">Maximum of 6 photos allowed.</p>}
          {minPhotosError && <p className="text-red-700 text-sm">At least one photo is required.</p>}
          <div className='flex gap-4'>
            {/* Input field for file selection */}
            <input className='p-3 border border-gray-300 rounded w-full' type='file' id='images' accept='image/*' multiple onChange={handleFileChange}></input>
            {/* Display selected image previews */}
            <div className="flex gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <img src={preview} alt={`preview-${index}`} className="w-20 h-20 object-cover rounded" />
                  <button
                    type="button"
                    className="absolute top-0 right-0 p-2 bg-red-600 text-white rounded-full"
                    onClick={() => handleDeleteImage(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
        {/* Button for form submission */}
        <button className='p-4 bg-green-900 rounded-lg uppercase text-white hover:opacity-85'>{loading ? 'Publishing' : 'Publish Research'}</button>
        {/* Error message display */}
        {error && <p className="text-red-700 text-sm">{error}</p>}

        {formSubmitted && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-950 rounded">
            You have submitted your Research, and it's in the process. We will publish it soon. Thank you!
          </div>
        )}
      </form>
    </main>
  );
}
