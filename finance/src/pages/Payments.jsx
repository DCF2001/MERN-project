//#####Payments.jsx#####

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../Images/abcnew.jpg';

const Payments = () => {
  const [formData, setFormData] = useState({
    Card_Number: '',
    Amount: '',
    Expiration_Month: '',
    Expiration_Year: '',
    CVN: '',
  });
  const [notifications, setNotifications] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: '' }); // Clear validation error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    // Card Number Validation
    if (!formData.Card_Number.trim() || !/^\d{12}$/.test(formData.Card_Number)) {
      errors.Card_Number = 'Card Number must be a 12-digit number';
    }

    // Amount Validation (Integer or Float)
    if (!formData.Amount.trim() || !/^\d+(\.\d+)?$/.test(formData.Amount)) {
      errors.Amount = 'Amount must be a valid integer or float';
    }

    // Expiration Month Validation
    const currentMonth = new Date().getMonth() + 1;
    if (
      !formData.Expiration_Month.trim() ||
      isNaN(formData.Expiration_Month) ||
      formData.Expiration_Month < currentMonth ||
      formData.Expiration_Month > 12
    ) {
      errors.Expiration_Month = 'Expiration Month should be a valid future month';
    }

    // Expiration Year Validation
    const currentYear = new Date().getFullYear();
    if (
      !formData.Expiration_Year.trim() ||
      isNaN(formData.Expiration_Year) ||
      formData.Expiration_Year < currentYear
    ) {
      errors.Expiration_Year = 'Expiration Year should be a valid future year';
    }

    // CVN Validation (3 digits)
    if (!formData.CVN.trim() || !/^\d{3}$/.test(formData.CVN)) {
      errors.CVN = 'CVN must be a 3-digit number';
    }

    // Update state with validation errors
    setValidationErrors(errors);

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const apiUrl = updateId ? `http://localhost:3000/Payments/update/${updateId}` : 'http://localhost:3000/Payments/add';
      const method = updateId ? 'put' : 'post';

      const response = await axios[method](apiUrl, formData);

      if (updateId) {
        alert('Payment updated successfully!');
      } else {
        alert('Payment submitted successfully!');
      }

      // Clear form data and fetch notifications
      setFormData({
        Card_Number: '',
        Amount: '',
        Expiration_Month: '',
        Expiration_Year: '',
        CVN: '',
      });
      fetchNotifications();
      setValidationErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Error submitting form: ${error.message}`);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Payments/getall');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleUpdate = (id, data) => {
    setUpdateId(id);
    setFormData(data);
  };

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Payments/delete/${id}`);
      alert('Payment deleted successfully!');
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting payment:', error);
      alert('Error deleting payment. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Payment Form */}
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <div className="bg-white rounded-lg shadow-lg p-6" style={{ backgroundColor: '#cce6cc' }}>
          <h2 className="text-center text-2xl font-bold mb-4">Payment Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Card Number */}
            <div className="mb-4">
              <label htmlFor="Card_Number" className="block text-sm font-medium">Card Number</label>
              <input
                type="text"
                id="Card_Number"
                name="Card_Number"
                value={formData.Card_Number}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Card_Number && 'border-red-500'}`}
                required
              />
              {validationErrors.Card_Number && <p className="text-red-500">{validationErrors.Card_Number}</p>}
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label htmlFor="Amount" className="block text-sm font-medium">Amount</label>
              <input
                type="text"
                id="Amount"
                name="Amount"
                value={formData.Amount}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Amount && 'border-red-500'}`}
                placeholder="Enter amount..."
                required
              />
              {validationErrors.Amount && <p className="text-red-500">{validationErrors.Amount}</p>}
            </div>

            {/* Expiration Month */}
            <div className="mb-4">
              <label htmlFor="Expiration_Month" className="block text-sm font-medium">Expiration Month</label>
              <input
                type="text"
                id="Expiration_Month"
                name="Expiration_Month"
                value={formData.Expiration_Month}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Expiration_Month && 'border-red-500'}`}
                placeholder="Enter expiration month..."
                required
              />
              {validationErrors.Expiration_Month && <p className="text-red-500">{validationErrors.Expiration_Month}</p>}
            </div>

            {/* Expiration Year */}
            <div className="mb-4">
              <label htmlFor="Expiration_Year" className="block text-sm font-medium">Expiration Year</label>
              <input
                type="text"
                id="Expiration_Year"
                name="Expiration_Year"
                value={formData.Expiration_Year}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.Expiration_Year && 'border-red-500'}`}
                placeholder="Enter expiration year..."
                required
              />
              {validationErrors.Expiration_Year && <p className="text-red-500">{validationErrors.Expiration_Year}</p>}
            </div>

            {/* CVN */}
            <div className="mb-4">
              <label htmlFor="CVN" className="block text-sm font-medium">CVN</label>
              <input
                type="text"
                id="CVN"
                name="CVN"
                value={formData.CVN}
                onChange={handleChange}
                className={`form-input mt-1 block w-full ${validationErrors.CVN && 'border-red-500'}`}
                placeholder="Enter CVN..."
                required
              />
              {validationErrors.CVN && <p className="text-red-500">{validationErrors.CVN}</p>}
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button type="submit" style={{ backgroundColor: '#305830' }} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                {updateId ? 'Update Payment' : 'Submit Payment'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Notifications */}
      <div style={{ width: '50%', paddingLeft: '20px' }}>
        <div className="bg-white rounded-lg shadow-lg p-6 h-full" style={{ backgroundColor: '#cce6cc' }}>
          <h3 className="text-2xl font-bold mb-4">Notifications</h3>
          <div style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
            {notifications.map((notification) => (
              <div key={notification._id} className="mb-4 p-4 border border-gray-300 rounded-lg">
                <p>Card Number: {notification.Card_Number}</p>
                <p>Amount: {notification.Amount}</p>
                <p>Expiration Month: {notification.Expiration_Month}</p>
                <p>Expiration Year: {notification.Expiration_Year}</p>
                <p>CVN: {notification.CVN}</p>
                <div className="mt-2">
                  <button style={{ backgroundColor: '#305830' }} className="hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleUpdate(notification._id, notification)}>Update Payment</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteNotification(notification._id)}>Delete Payment</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
