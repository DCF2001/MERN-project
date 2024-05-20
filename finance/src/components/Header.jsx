import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    < header style={{ backgroundColor: '#114232' }} className='shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-8">
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
            <span className='text-slate-500' style={{ color: '#FCDC2A' }}>Green Bin</span>
        
        </h1>
        </Link>
        {/*<form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder="Search..." 
          className='bg-transparent focus:outline-none w-64 sm:w-64'/>
          <FaSearch className='text-slate-600'/>
  </form>*/}

  <ul className='flex gap-8'> 
  <Link to='/'>
    <li className='text-sm sm:text-xl hidden sm:inline text-slate-700 hover:underline' style={{ color: '#FFFFFF' }}>Home</li>
    </Link>
    <Link to='/payments'>
    <li className='text-sm sm:text-xl hidden sm:inline text-slate-700 hover:underline' style={{ color: '#FFFFFF' }}>Payments</li>
    </Link>
    <Link to='/reports'>
    <li className='text-sm sm:text-xl hidden sm:inline text-slate-700 hover:underline' style={{ color: '#FFFFFF' }}>Reports</li>
    </Link>
    {/* <Link to='/requests'>
    <li className='text-sm sm:text-xl hidden sm:inline text-slate-700 hover:underline' style={{ color: '#FFFFFF' }}>Requests</li>
    </Link> */}
  </ul>
        </div>
    </header>
  )
}
