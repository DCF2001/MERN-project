import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskHeader from '../components/Headertaskmanagement';
import backgroundImage from '../../src/images/backgroundimage.jpg';

const Vehiclerequests = () => {
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Type_of_Requested_Service: '',
    Frequency_of_Service: '',
    Preferred_Collection_days: '',
    Type_and_Amount_of_Waste: '',
    Special_Instructions_or_Requests: '',
    Property_type: '',
  });
  const [notifications, setNotifications] = useState([]);
  const [updateId, setUpdateId] = useState(null); // Track the ID of the item being updated

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (updateId) {
        // If updateId is set, it means we're updating existing data
        await axios.put(`http://localhost:3001/vehiclerequests/update/${updateId}`, formData);
        alert('Request updated successfully!');
        setUpdateId(null); // Reset updateId after update
      } else {
        // Otherwise, we're adding new data
        await axios.post('http://localhost:3001/vehiclerequests/add', formData);
        alert('Form submitted successfully!');
      }
      setFormData({
        First_Name: '',
        Last_Name: '',
        Type_of_Requested_Service: '',
        Frequency_of_Service: '',
        Preferred_Collection_days: '',
        Type_and_Amount_of_Waste: '',
        Special_Instructions_or_Requests: '',
        Property_type: '',
      });
      fetchNotifications(); // Refresh notifications after form submission or update
    } catch (error) {
      console.error('Error submitting form:', error); // Log the actual error object
      alert(`Error submitting form: ${error}`);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3001/vehiclerequests/getall');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleUpdate = (id, data) => {
    // Set the updateId and populate the form with the data to be updated
    setUpdateId(id);
    setFormData(data);
  };

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/vehiclerequests/delete/${id}`);
      alert('Request deleted successfully!');
      fetchNotifications(); // Refresh notifications after deletion
    } catch (error) {
      console.error('Error deleting request:', error);
      alert('Error deleting request. Please try again later.');
    }
  };

  return (
    <div>
      <TaskHeader />
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="container" style={{ backgroundImage: 'backgroundimage.jpg', backgroundSize: 'cover', minHeight: '100vh' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div style={{ backgroundColor: '#114232', color: 'white', padding: '20px', borderRadius: '5px' }}>
              <h3 className="text-center mb-4">Vehicle Requests</h3>
              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" className="form-control" id="fname" name="firstname" value={formData.First_Name} onChange={(e) => setFormData({ ...formData, First_Name: e.target.value })} placeholder="Your first name.." required />
                </div>

                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" className="form-control" id="lname" name="lastname" value={formData.Last_Name} onChange={(e) => setFormData({ ...formData, Last_Name: e.target.value })} placeholder="Your last name.." required />
                </div>

                {/* Service Details */}
                <div className="form-group">
                  <label htmlFor="serviceType">Type of Service Requested</label>
                  <select className="form-control" id="serviceType" name="serviceType" value={formData.Type_of_Requested_Service} onChange={(e) => setFormData({ ...formData, Type_of_Requested_Service: e.target.value })} required>
                    <option value="">Select service type...</option>
                    <option value="garbageCollection">Garbage Collection</option>
                    <option value="recycling">Recycling</option>
                    <option value="specialWasteDisposal">Special Waste Disposal</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="frequency">Frequency of Service</label>
                  <select className="form-control" id="frequency" name="frequency" value={formData.Frequency_of_Service} onChange={(e) => setFormData({ ...formData, Frequency_of_Service: e.target.value })} required>
                    <option value="">Select frequency...</option>
                    <option value="oneTime">One-Time</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="collectionDays">Preferred Collection Days or Schedule</label>
                  <input type="text" className="form-control" id="collectionDays" name="collectionDays" value={formData.Preferred_Collection_days} onChange={(e) => setFormData({ ...formData, Preferred_Collection_days: e.target.value })} placeholder="Preferred collection days or schedule..." />
                </div>

                <div className="form-group">
                  <label htmlFor="wasteType">Type and Amount of Waste</label>
                  <input type="text" className="form-control" id="wasteType" name="wasteType" value={formData.Type_and_Amount_of_Waste} onChange={(e) => setFormData({ ...formData, Type_and_Amount_of_Waste: e.target.value })} placeholder="Type and amount of waste..." />
                </div>

                <div className="form-group">
                  <label htmlFor="specialInstructions">Special Instructions or Requests</label>
                  <textarea className="form-control" id="specialInstructions" name="specialInstructions" value={formData.Special_Instructions_or_Requests} onChange={(e) => setFormData({ ...formData, Special_Instructions_or_Requests: e.target.value })} rows="3" placeholder="Special instructions or requests..."></textarea>
                </div>

                {/* Property Information */}
                <div className="form-group">
                  <label htmlFor="propertyType">Property Type</label>
                  <select className="form-control" id="propertyType" name="propertyType" value={formData.Property_type} onChange={(e) => setFormData({ ...formData, Property_type: e.target.value })} required>
                    <option value="">Select property type...</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">{updateId ? 'Update Request' : 'Submit'}</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card bg-light p-4">
            <h3 className="text-center mb-4" style={{ color: 'white' }}>Notifications</h3>
              <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px', height: '300px', overflowY: 'scroll' }}>
                {notifications.map((notification) => (
                  <div key={notification._id} className="notification-item card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">First Name: {notification.First_Name}</h5>
                      <h5 className="card-title">Last Name: {notification.Last_Name}</h5>
                      <h5 className="card-title">Type of Service Requested: {notification.Type_of_Requested_Service}</h5>
                      <h5 className="card-title">Frequency of Service: {notification.Frequency_of_Service}</h5>
                      <h5 className="card-title">Preferred collection Days or Schedule: {notification.Preferred_Collection_days}</h5>
                      <h5 className="card-title">Type and Amount of Waste: {notification.Type_and_Amount_of_Waste}</h5>
                      <h5 className="card-title">Special Instructions for Requests:  {notification.Special_Instructions_or_Requests}</h5>
                      <h5 className="card-title">Property Type: {notification.Property_type}</h5>
                      <div className="btn-group" role="group" aria-label="Notification actions">
                        <button type="button" className="btn btn-primary" onClick={() => handleUpdate(notification._id, notification)}>Update Request</button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteNotification(notification._id)}>Delete Request</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vehiclerequests;
