import React, {useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import backgroundImage from '/unsplash.jpg';


const DeleteGarbageRoute = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  
  const handleDeleteRecord = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3001/garbageRouter/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
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
      <h1 className='text-3xl my-4'> Delete Route</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure, You want tot delete this Route?</h3>
        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteRecord}
        >
        Yes, Delete
        </button>

      </div>
    </div>
    </div>
    </div>
    
  )
}

export default DeleteGarbageRoute