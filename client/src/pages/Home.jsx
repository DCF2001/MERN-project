import { Link } from 'react-router-dom';
export default function Home() {

  return (
    
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span> garbage collecting services with ease
        </h1>

        <div className='text-gray-600 text-xs sm:text-sm'>
          Green Bin Company is your one-stop destination for efficient garbage collection and sustainable waste management solutions. Our mission is to make waste disposal hassle-free and environmentally responsible.
          <br/><br/>
          With a diverse range of services and innovative recycling products, we're dedicated to promoting a cleaner, greener planet. Whether you're a homeowner, business owner, or community organizer, we have tailored solutions to meet your specific needs.
          <br/><br/>
          <div className="text-lg text-gray-700 font-bold mb-2">Our services include:</div>
          <ul className="list-disc pl-6">
            
            <li className="mb-2"><Link to="/search" className="text-blue-600 hover:underline">Residential garbage collection</Link></li>
            <li className="mb-2"><Link to="/search" className="text-purple-600 hover:underline">Recycling programs</Link></li>
            <li className="mb-2"><Link to="/search" className="text-yellow-600 hover:underline">Organic waste composting</Link></li>
            
            
            
          </ul>
          Join us in our commitment to preserving the environment and creating a sustainable future for generations to come.
          <div className='lg:w-1/3 flex flex-col gap-4 p-3 max-w-lg mx-auto'>
        <img src='/garbageImage.jpg' alt='garbage' className='w-full h-auto' />
      </div>
        </div>
        <Link to={"/search"} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline flex flex-col gap-4 p-3 max-w-lg mx-auto'>
          Let's get started...
        </Link>
      </div>
      
    </div>
    
  );
}



