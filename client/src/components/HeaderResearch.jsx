import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderResearch() {
  return (

    
    <header className=' shadow-md mt-16 mb-6 '>
        
    <div className='flex  items-center max-w-6xl mx-auto '>

      
      <ul className='cursor-pointer flex gap-10  ml-80 pl-96 '>
   <Link to='/CResearch'>   <li className='hidden sm:inline text-green-900 hover:underline'><b>Add Research</b></li></Link>
   <Link to='/UResearch'> <li className='hidden sm:inline text-green-900 hover:underline'><b>Update Research</b></li></Link>
   <Link to='/RResearch'> <li className='hidden sm:inline text-green-900 hover:underline'><b>Remove Research</b></li></Link>


      </ul>
    </div>
    </header>
  )
}
