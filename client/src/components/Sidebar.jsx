import React from 'react'
import {FaHome} from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();

  return (
    <div className='w-64 bg-slate-300 shadow-md fixed h-full px-4 py-2'>
    <div className='my-2 mb-4'>
    <h1 className='text-3x text-slate-700 font-bold'>Dashboard</h1>
    </div>
    <hr />
    <ul className='mt-3 text-white font-bold'>

    <li
          className='mb-2 rounded hove:shadow hover:bg-blue-500 py-2 cursor-pointer' 
          onClick={() => navigate('/view-listing')}
        >
          <a href="#" className='px-3'> 
            <h1 className='inline-block w-6 h-6 mr-2 -mt-2' >
            Inventory
            </h1>
          </a>
    </li>


    <li
          className='mb-2 rounded hove:shadow hover:bg-blue-500 py-2 cursor-pointer' 
          onClick={() => navigate('/create-listing')}
        >
          <a href="#" className='px-3'> 
            <h1 className='inline-block h-6 mr-2 -mt-2' >
            Create listing
            </h1>
          </a>
    </li>

    
    <li
          className='mb-2 rounded hove:shadow hover:bg-blue-500 py-2 cursor-pointer' 
          onClick={() => navigate('#')}
        >
          <a href="#" className='px-3'> 
            <h1 className='inline-block w-6 h-6 mr-2 -mt-2' >
            Orders
            </h1>
          </a>
    </li>

    
    </ul>
    </div>
  )
}

