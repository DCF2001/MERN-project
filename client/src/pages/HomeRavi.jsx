import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Headerr from '../components/Headerr';
import backgroundImage from '/unsplash.jpg';
import { FaSearch } from 'react-icons/fa';
import RouteDocument from './RouteDocument';

const Home = () => {
  const [garbageRoutes, setGarbageRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3001/garbageRouter/')
      .then((res) => {
        setGarbageRoutes(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = garbageRoutes.filter((route) =>
      route.startLocation.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRoutes(filtered);
  }, [searchTerm, garbageRoutes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional actions upon form submission if needed
  };

  return (
    <div>
      <div className="bg-image" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200vh' }}>
        <Headerr />
        <div className='p-4'>
          <div className='flex justify-between items-center '>
            <h1 className='text-3xl my-8 text-green-200' style={{ backgroundColor: 'darkgreen', padding: '10px', borderRadius: '10px', width: '1400px' }}> Route Records
              <div className='flex justify-between items-start max-w-8xl mx-auto p-3'>
                <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg'>
                  <input
                    type="text"
                    placeholder='Search by Start Location...'
                    className='bg-white focus:outline-none w-24 sm:w-64'
                    value={searchTerm}
                    onChange={handleSearchChange} />
                  <button>
                    <FaSearch className='text-slate-600' />
                  </button>
                </form>
              </div>
            </h1>
            <Link to='/create'>
              <MdOutlineAddBox className='text-black text-8xl' />
            </Link>
          </div>

          {loading ? (
            <Spinner />
          ) : (
            <>
            <RouteDocument garbageRoutes={garbageRoutes} />
            <table className='w-full border-separate border-spacing-2 '>
              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md bg-green-800 text-white'>No</th>
                  <th className='border border-slate-600 rounded-md bg-green-800 text-white'>RoadNumber</th>
                  <th className='border border-slate-600 rounded-md bg-green-800 text-white'>Start Location</th>
                  <th className='border border-slate-600 rounded-md bg-green-800 text-white'>End Location</th>
                  <th className='border border-slate-600 rounded-md bg-green-800 text-white'>No of Houses</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden bg-green-800 text-white'>House Addresses</th>
                  <th className='border border-slate-600 rounded-md bg-green-800 text-white'>Date</th>
                  <th className='border border-slate-600 rounded-md bg-green-800 text-white'>Operations</th>
                </tr>
              </thead>
              <tbody>
                {filteredRoutes.map((garbageRoute, index) => (
                  <tr key={garbageRoute._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {index + 1}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {garbageRoute.number}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {garbageRoute.startLocation}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {garbageRoute.endLocation}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {garbageRoute.noOfHouses}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                      {garbageRoute.houseAddresses}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      {garbageRoute.date}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                      <div className='flex justify-center gap-x-4 '>
                        <Link to={`/all/${garbageRoute._id}`}>
                          <BsInfoCircle className='text-2xl text-green-800' />
                        </Link>
                        <Link to={`/edit/${garbageRoute._id}`}>
                          <AiOutlineEdit className='text-2xl text-yellow-600' />
                        </Link>
                        <Link to={`/delete/${garbageRoute._id}`}>
                          <MdOutlineDelete className='text-2xl text-red-600' />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

