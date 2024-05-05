import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pic/back/logo.png'


export default function Header() {
  return (
    <header className='bg bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

    <Link to=''>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-green-700'>Green</span>
        <span className='text-green-900 flex gap-2'>Bin<img className='w-8  'src={logo}></img></span>
      </h1></Link>

     
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
