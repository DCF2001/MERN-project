import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '/unsplash.jpg';

const CreateGarbageRoute = () => {
  const [number, setNumber] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [noOfHouses, setNoOfHouses] = useState('');
  const [houseAddresses, setHouseAddresses] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isNumberUnique, setIsNumberUnique] = useState(true); // State to track if the number is unique
  const navigate = useNavigate();

  // Get current date
  const currentDate = new Date().toISOString().split('T')[0];

  const handleCheckUniqueNumber = () => {
    // Make an asynchronous request to your backend to check if the number exists
    axios
      .get(`http://localhost:3001/garbageRouter/exists/${number}`)
      .then((response) => {
        if (response.data.exists) {
          setIsNumberUnique(false); // Number already exists
        } else {
          setIsNumberUnique(true); // Number is unique
        }
      })
      .catch((error) => {
        console.error('Error checking number uniqueness:', error);
      });
  };

  const handleSaveRecord = () => {
    // Validation
    const errors = {};
    if (!isNumberUnique) errors.number = 'This number already exists.';
    if (!startLocation) errors.startLocation = 'Start location is required.';
    if (!endLocation) errors.endLocation = 'End location is required.';
    if (!noOfHouses) errors.noOfHouses = 'Number of houses is required.';
    if (!houseAddresses) errors.houseAddresses = 'House addresses are required.';
    if (!date) errors.date = 'Date is required.';
    if (date < currentDate) errors.date = 'Date must be from today onwards.';
    if (!/^\d+$/.test(number)) errors.number = 'Please enter a valid number.';
    if (!/^\d+$/.test(noOfHouses)) errors.noOfHouses = 'Please enter a valid number.';
    if (!/^[A-Z][a-zA-Z]*$/.test(startLocation)) errors.startLocation = 'Start location must start with a capital English letter.';
    if (!/^[A-Z][a-zA-Z]*$/.test(endLocation)) errors.endLocation = 'End location must start with a capital English letter.';
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const data = {
      number,
      startLocation,
      endLocation,
      noOfHouses,
      houseAddresses,
      date,
    };
    setLoading(true);
    axios
      .post('http://localhost:3001/garbageRouter', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console.');
        console.error(error);
      });
  };

  return (
    <div>
      <div className="bg-image" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200vh' }}>   
        <div className='p-4'>
          <BackButton/>
          <h1 className='text-3xl my-4 text-green-200' style={{ backgroundColor: 'darkgreen', padding: '10px', borderRadius: '10px', width: '800px', position: 'center', margin: 'auto', marginBottom: '20px'}}>Create Route</h1>
          {loading ? <Spinner/> : ''}
          <div className='flex flex-col border-2 border-green-400 rounded-xl w-[800px] p-4 mx-auto '>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Number</label>
              <input
                type='text'
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  setIsNumberUnique(true); // Reset isNumberUnique when input changes
                }}
                onBlur={handleCheckUniqueNumber} // Check uniqueness onBlur
                className='border border-gray-500 px-4 py-2 w-full'
              />
              {errors.number && <div className="text-red-500">{errors.number}</div>}
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Start Location</label>
              <input
                type='text'
                value={startLocation}
                onChange={(e) => {
                  const capitalizedValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
                  setStartLocation(capitalizedValue);
                }}
                className='border border-gray-500 px-4 py-2 w-full'
              />
              {errors.startLocation && <div className="text-red-500">{errors.startLocation}</div>}
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>End Location</label>
              <input
                type='text'
                value={endLocation}
                onChange={(e) => {
                  const capitalizedValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
                  setEndLocation(capitalizedValue);
                }}
                className='border border-gray-500 px-4 py-2 w-full'
              />
              {errors.endLocation && <div className="text-red-500">{errors.endLocation}</div>}
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>No Of Houses</label>
              <input
                type='text'
                value={noOfHouses}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/, ''); // Remove non-numeric characters
                  setNoOfHouses(value);
                }}
                className='border border-gray-500 px-4 py-2 w-full'
              />
              {errors.noOfHouses && <div className="text-red-500">{errors.noOfHouses}</div>}
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>House Addresses</label>
              <input
                type='text'
                value={houseAddresses}
                onChange={(e) => setHouseAddresses(e.target.value)}
                className='border border-gray-500 px-4 py-2 w-full'
              />
              {errors.houseAddresses && <div className="text-red-500">{errors.houseAddresses}</div>}
            </div>
            <div className='my-4'>
              <label className='text-xl mr-4 text-gray-500'>Date</label>
              <input
                type='date'
                value={date}
                min={currentDate} // Set minimum date
                onChange={(e) => setDate(e.target.value)}
                className='border border-gray-500 px-4 py-2 w-full'
              />
              {errors.date && <div className="text-red-500">{errors.date}</div>}
            </div>
            <button className='p-2 bg-green-300 m-8' onClick={handleSaveRecord}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGarbageRoute;
