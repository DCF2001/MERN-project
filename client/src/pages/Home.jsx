import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {

  return (
    
    <div>
      <Header/>
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
          <div className='lg:w-1/7 flex flex-col gap-4 p-3 max-w-lg mx-auto'>
        <img src='../../src/images/garbageImage4.jpeg' alt='garbage' className='w-full h-auto' />
      </div>

      <div className='p-6 bg-gray-100 text-center'>
        <p className='text-lg text-slate-500'>
          Embark on a journey into the future of waste management innovation with us. At Green Bin Company, we're not just collecting garbage we're pioneering the next generation of sustainable solutions. Our team of researchers is dedicated to pushing the boundaries of what's possible, exploring cutting-edge technologies and methodologies to revolutionize how we handle waste. Join us as we delve deep into the science of garbage management, uncovering new insights and developing innovative strategies to minimize environmental impact. From advanced recycling programs to revolutionary composting techniques, our research is paving the way towards a cleaner, greener planet. With each discovery, we're inching closer to a world where waste is no longer a problem, but a valuable resource waiting to be reclaimed. Together, let's shape a future where sustainability isn't just a goal it's a reality.
        </p>
      </div>
        </div>
        <Link to={"/research"} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline flex flex-col gap-4 p-3 max-w-lg mx-auto'>
          Let's  see the Researches...
        </Link>
        
      </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  

    
  );
}



