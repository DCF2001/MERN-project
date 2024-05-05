import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskHeader from '../components/Headertaskmanagement';

const Routerequests = () => {
  const [formData, setFormData] = useState({
    Location_Details: '',
    Type_and_Amount_of_Waste: '',
    Preffered_Collection_Time: '',
    Special_instructions: '',
    Contact_information: '',
  });
  const [notifications, setNotifications] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [updatingId, setUpdatingId] = useState(null); // State to track the id being updated

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3001/routerequests/getall');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/routerequests/delete/${id}`);
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const handleUpdate = async (id, dataToUpdate) => {
    setUpdatingId(id); // Set the id being updated
    setFormData(dataToUpdate); // Set the form data to the existing data
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = 'http://localhost:3001/routerequests/add';
      let method = 'POST';
      if (updatingId) {
        url = `http://localhost:3001/routerequests/update/${updatingId}`;
        method = 'PUT';
      }
      const response = await axios({
        method,
        url,
        data: formData,
      });
      console.log(response.data);
      setFormData({
        Location_Details: '',
        Type_and_Amount_of_Waste: '',
        Preffered_Collection_Time: '',
        Special_instructions: '',
        Contact_information: '',
      });
      fetchNotifications();
      setSuccessMessage('Form submitted successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // Clear the success message after 3 seconds
      setUpdatingId(null); // Clear the updating id
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <TaskHeader />
      <div className="container-fluid" style={{ backgroundColor: '#ffff', minHeight: '100vh', paddingTop: '20px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-light p-4">
            <div style={{ backgroundColor: '#114232', color: 'white', padding: '20px', borderRadius: '5px' }}>
              <h3 className="text-center mb-4">Route Requests</h3>
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                {/* Use hidden input to store the id being updated */}
                {updatingId && <input type="hidden" name="id" value={updatingId} />}
                <div className="form-group">
                  <label htmlFor="location">Location Details</label>
                  <input type="text" className="form-control" id="location" name="Location_Details" value={formData.Location_Details} onChange={handleInputChange} placeholder="Address or location coordinates..." required />
                </div>
                <div className="form-group">
                  <label htmlFor="waste">Type and Amount of Waste</label>
                  <input type="text" className="form-control" id="waste" name="Type_and_Amount_of_Waste" value={formData.Type_and_Amount_of_Waste} onChange={handleInputChange} placeholder="Type and amount of waste..." required />
                </div>
                <div className="form-group">
                  <label htmlFor="collectionTime">Preferred Collection Time</label>
                  <input type="text" className="form-control" id="collectionTime" name="Preffered_Collection_Time" value={formData.Preffered_Collection_Time} onChange={handleInputChange} placeholder="Preferred collection time or schedule..." />
                </div>
                <div className="form-group">
                  <label htmlFor="instructions">Special Instructions</label>
                  <textarea className="form-control" id="instructions" name="Special_instructions" value={formData.Special_instructions} onChange={handleInputChange} rows="3" placeholder="Special instructions or requests..."></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact Information</label>
                  <input type="text" className="form-control" id="contact" name="Contact_information" value={formData.Contact_information} onChange={handleInputChange} placeholder="Your contact information..." required />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">{updatingId ? 'Update Request' : 'Submit'}</button>
                </div>
              </form>
            </div>
          </div>
          </div>
          <div className="col-md-5">
            <div className="card bg-light p-4">
            <h3 className="text-center mb-4">Notifications</h3>
            <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px', height: '300px', overflowY: 'scroll' }}>
              
              <div className="notification-container">
                {notifications.map((notification) => (
                  <div key={notification._id} className="notification-item card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Location Details: {notification.Location_Details}</h5>
                      <p className="card-text">Type and Amount of Waste: {notification.Type_and_Amount_of_Waste}</p>
                      <p className="card-text">Preferred Collection Time: {notification.Preffered_Collection_Time}</p>
                      <p className="card-text">Special Instructions: {notification.Special_instructions}</p>
                      <p className="card-text">Contact Information: {notification.Contact_information}</p>
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

export default Routerequests;
