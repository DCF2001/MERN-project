import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import Headerr from '../components/Headerr';
import backgroundImage from '/unsplash.jpg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import RouteDocument from './RouteDocument';


const ShowAll = () => {
  const [garbageRoutes, setGarbageRoutes] = useState({});
  const [loading, setLoading] = useState(false);
  
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/garbageroute/${id}`)
      .then((res) => {
        setGarbageRoutes(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  
  return (
    <div>
      <div className="bg-image" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200vh' }}>
        <Headerr />

        <div className='p-4'>
          <BackButton />
          <h1 className='text-3xl my-4 text-green-200' style={{ backgroundColor: 'darkgreen', padding: '10px', borderRadius: '10px', width: '1500px' }}>
            Show Details
          </h1>
          {loading ? (
            <Spinner />
          ) : (
            <div className='flex flex-col border-2 border-black rounded-xl w-fit p-4'>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Id: </span>
                <span>{garbageRoutes._id}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Number: </span>
                <span>{garbageRoutes.number}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Start Location: </span>
                <span>{garbageRoutes.startLocation}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>End Location: </span>
                <span>{garbageRoutes.endLocation}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>No Of Houses: </span>
                <span>{garbageRoutes.noOfHouses}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>House Addresses: </span>
                <span>{garbageRoutes.houseAddresses}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Date: </span>
                <span>{garbageRoutes.date}</span>
              </div>
            </div>
          )}
            
          {/* Example export button */}
          {/* Replace this with your actual PDF export logic */}
          {garbageRoutes && (
  <div className="px-4 py-3 bg-transparent text-right sm:px-6">
    <PDFDownloadLink document={<RouteDocument garbageRoutes={garbageRoutes} />} fileName={`${garbageRoutes.number}.pdf`}>
      {({ loading }) => (
        loading ? 'Loading...' : <button id="exportButton" type="button" className="btn btn-sm btn-outline-secondary" style={{ backgroundColor: 'green', color: 'white' }}>Export</button>
      )}
    </PDFDownloadLink>
  </div>
)}


          

        </div>
      </div>
    </div>
  )
}

export default ShowAll;
