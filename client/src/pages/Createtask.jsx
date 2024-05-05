import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskHeader from '../components/Headertaskmanagement';
import backgroundImage from '../../src/images/backgroundimage.jpg'; // Adjust the path accordingly

const GarbageCollectionForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Property_Type: '',
    Service: '',
    Other_Services: ''
  });
  const [formError, setFormError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate input based on name
    if (name === 'Name' || name === 'Other_Services') {
      // Only allow alphabetic characters and spaces
      if (/^[a-zA-Z ]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      } else {
        setFormError(`Invalid input for ${name}`);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/createtask/add', formData);
      console.log(response.data);
      setFormData({
        Name: '',
        Property_Type: '',
        Service: '',
        Other_Services: ''
      });
      setSubmitSuccess(true);
      setFormError(null);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      fetchNotifications(); // Fetch notifications after form submission
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('Error submitting form. Please try again.');
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3001/notifications');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div>
      <TaskHeader/>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '50vh' }}>
        <div className="flex justify-center items-start min-h-screen">
          {/* Form */}
          <div className="w-full md:w-1/2 lg:w-1/3 mt-8 mr-8">
            <div className="bg-green-800 p-8 rounded shadow-md" style={{ backgroundColor: '#114232' }}>
              <h2 className="text-4xl font-bold mb-6 text-center text-white">Garbage Collection Service Request Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-white">User Name:</label>
                  <input type="text" id="name" name="Name" value={formData.Name} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="propertyType" className="block mb-2 text-white">Property Type:</label>
                  <select id="propertyType" name="Property_Type" value={formData.Property_Type} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" required>
                    <option value="">Select Property Type</option>
                    <option value="home">Home</option>
                    <option value="business">Business/Organization</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="serviceType" className="block mb-2 text-white">Choose the Service:</label>
                  <select id="serviceType" name="Service" value={formData.Service} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" required>
                    <option value="">Select Service</option>
                    {/* Options for services */}
                    <optgroup label="Home Services">
                      <option value="recyclingPickup">Waste Recycling Pickup</option>
                      <option value="bulkyItemPickup">Bulky Item Pickup</option>
                      <option value="dumpsterRental">Dumpster Rental</option>
                      <option value="apartments">Apartments, Condos & HOAs</option>
                      <option value="municipalities">Municipalities</option>
                      <option value="portableToilets">Portable Toilets</option>
                      <option value="other">Something Else</option>
                    </optgroup>
                    <optgroup label="Business/Organization Services">
                      <option value="wasteRecycling">Waste and Recycling Pickup</option>
                      <option value="dumpsterRentalBusiness">Dumpster Rental</option>
                      <option value="apartmentsBusiness">Apartments, Condos & HOAs</option>
                      <option value="compactors">Compactors and Industrial Waste</option>
                      <option value="municipalitiesBusiness">Municipalities</option>
                      <option value="portableToiletsBusiness">Portable Toilets</option>
                      <option value="otherBusiness">Something Else</option>
                    </optgroup>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="otherService" className="block mb-2 text-white">Enter Other Service:</label>
                  <input type="text" id="otherService" name="Other_Services" value={formData.Other_Services} onChange={handleChange} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500 text-black" />
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 focus:outline-none">Submit Request</button>
                </div>
              </form>
              {formError && <div className="text-red-500">{formError}</div>}
              {submitSuccess && <div className="text-green-500">Form submitted successfully!</div>}
            </div>
          </div>
          {/* Notification panel */}
          <div className="w-full md:w-1/2 lg:w-1/3 mt-8">
            <div className="bg-light p-4" style={{ backgroundColor: '#f2f2f2', borderRadius: '5px', height: '300px', overflowY: 'scroll' }}>
              <h3 className="text-center mb-4" style={{ color: 'white' }}>Notifications</h3>
              {notifications.map((notification) => (
                <div key={notification._id} className="notification-item card mb-3">
                  {/* Notification content */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarbageCollectionForm;
