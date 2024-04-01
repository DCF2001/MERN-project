import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/pic/back/logo.png'


export default function Header() {
  return (
    <header className='bg bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

    <Link to=''>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-green-700'>Green</span>
        <span className='text-green-900 flex gap-2'>Cycle<img className='w-8  'src={logo}></img></span>
      </h1></Link>

      <form className='bg-slate-100 p-3 rounded-lg items-center flex '>
        <input 
        type="text"
         placeholder='Search...'
          className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
        <FaSearch className='text-green-700 mt-'/>
      </form>
      <ul className='cursor-pointer flex gap-5'>
   <Link to=''>   <li className='hidden sm:inline text-green-900 hover:underline'><b>Home</b></li></Link>
   <Link to=''> <li className='hidden sm:inline text-green-900 hover:underline'><b>About</b></li></Link>
          <Link to = ''>
                <li className=' text-green-900 hover:underline'><b>Sign in</b></li>
              </Link>
      </ul>
    </div>
    </header>
  );
}
