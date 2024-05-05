import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateForm = ({ taskId, onClose }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Property_Type: '',
    Service: '',
    Other_Services: '',
  });

  useEffect(() => {
    // Fetch task details by ID when the component mounts
    fetchTaskDetails();
  }, [taskId]); // Run this effect when taskId changes

  const fetchTaskDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/createtask/get/${taskId}`);
      setFormData(response.data); // Set form data with fetched task details
    } catch (error) {
      console.error('Error fetching task details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/vehiclerequests/update/${taskId}`, formData);
      alert('Task updated successfully!');
      onClose(); // Close the update form
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Error updating task. Please try again later.');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl mb-4">Update Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Task Name</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
            <input
              type="text"
              id="propertyType"
              name="Property_Type"
              value={formData.Property_Type}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
            <input
              type="text"
              id="service"
              name="Service"
              value={formData.Service}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otherServices" className="block text-sm font-medium text-gray-700">Other Services</label>
            <input
              type="text"
              id="otherServices"
              name="Other_Services"
              value={formData.Other_Services}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Update
            </button>
            <button type="button" onClick={onClose} className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
