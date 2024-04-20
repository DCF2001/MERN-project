import React from 'react';
import logo from '../assets/pic/back/logo.png'

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-500 flex">GreenBin <img className=' pl-4 w-12' src={logo}/></h2>
          <p className="text-sm mt-4">Empowering communities one bin at a time.</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="text-sm">
            <li>Pricing</li>
            <li>Book Demo</li>
            <li>Product updates</li>
            <li>SafetyCulture</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="text-sm">
            <li>Help Center</li>
            <li>Partner support</li>
            <li>API developer documentation</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="text-sm">
            <li>Checklist library</li>
            <li>App & software guides</li>
            <li>Checklist guides</li>
            <li>eBooks</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 font-semibold">
        <p className="text-sm">Together, let's pave the way to a cleaner, greener future. Join us in our mission for sustainable waste management.</p>
        <div className="mt-6">
          <p className="text-base">Contact Us:</p>
          <p className="text-sm">Phone: <span className="">077-160-3864</span></p>
          <p className="text-sm">Email: <span className="">info@greenbin.com</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
