import React, { useState } from 'react';

// Import your background image
import backgroundImage from '/backgroundImage7jpg.jpg';

const ReportGeneration = () => {
  const [formData, setFormData] = useState({
    service: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Handle submit called');

    try {
      const response = await fetch('/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error generating report: ' + response.statusText);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link and trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'report.pdf'; // Set the filename for download
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Release the object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-image" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">Generate Report</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="service" className="block text-sm font-bold mb-2">Service</label>
          <select id="service" className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" onChange={handleChange}>
            <option value="">Select a Service</option>
            <option value="Garbage Pickup for Home">Garbage Pickup for Home</option>
            <option value="Business Waste">Business Waste</option>
            <option value="Organic Waste Composting">Organic Waste Composting</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold mb-2">Report Description</label>
          <input type="text" placeholder="Enter description" className="border p-8 rounded-lg" id="description" onChange={handleChange} />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500">Generate Report</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ReportGeneration;




