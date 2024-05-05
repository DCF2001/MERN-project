import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import backgroundImage from '/unsplash.jpg';



const EditGarbageRoute = () => {
  const [number, setNumber] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [noOfHouses, setNoOfHouses] = useState('');
  const [houseAddresses, setHouseAddresses] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{id}= useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/garbageRouter/${id}`)
    .then((res) => {
      setNumber(res.data.number);
      setStartLocation(res.data.startLocation);
      setEndLocation(res.data.endLocation);
      setNoOfHouses(res.data.noOfHouses);
      setHouseAddresses(res.data.houseAddresses);
      const formattedDate = new Date(res.data.date).toISOString().split('T')[0];
      setDate(formattedDate);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('An error happend. Please Check console');
      console.log(error);
    })
  }, [])

  const handleUpdateRecord = () => {
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
      .put(`http://localhost:3001/garbageRouter/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      }).catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  };

  return (
    <div>
    <div className="bg-image" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200vh' }}>
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4 text-green-200' style={{ backgroundColor: 'darkgreen', padding: '10px', borderRadius: '10px', width: '800px', position: 'center', margin: 'auto', marginBottom: '20px'}}>Update Route</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-green-400 rounded-xl w-[800px] p-4 mx-auto '>
        <div className='my-4'>
          <label className='text-xl mr-4  text-gray-500'>Number</label>
          <input
            type='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className='border border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4  text-gray-500'>Start Location</label>
          <input
            type='text'
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            className='border border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4  text-gray-500'>End Location</label>
          <input
            type='text'
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
            className='border border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4  text-gray-500'>No Of Houses</label>
          <input
            type='text'
            value={noOfHouses}
            onChange={(e) => setNoOfHouses(e.target.value)}
            className='border border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4  text-gray-500'>House Addresses</label>
          <input
            type='text'
            value={houseAddresses}
            onChange={(e) => setHouseAddresses(e.target.value)}
            className='border border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4  text-gray-500'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-green-300 m-8 ' onClick={handleUpdateRecord}>
            Save
        </button>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default EditGarbageRoute