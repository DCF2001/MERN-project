import React from 'react';

const Routerequests = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Form Section */}
          <div style={{ backgroundColor: '#114232', color: 'white', padding: '20px', borderRadius: '5px' }}>
            <h3 className="text-center mb-4">Route Requests</h3>
            <form action="/submit_route_request" method="POST">
              {/* Location Details */}
              <div className="form-group">
                <label htmlFor="location">Location Details</label>
                <input type="text" className="form-control" id="location" name="location" placeholder="Address or location coordinates..." required />
              </div>

              {/* Type and Amount of Waste */}
              <div className="form-group">
                <label htmlFor="waste">Type and Amount of Waste</label>
                <input type="text" className="form-control" id="waste" name="waste" placeholder="Type and amount of waste..." required />
              </div>

              {/* Preferred Collection Time */}
              <div className="form-group">
                <label htmlFor="collectionTime">Preferred Collection Time</label>
                <input type="text" className="form-control" id="collectionTime" name="collectionTime" placeholder="Preferred collection time or schedule..." />
              </div>

              {/* Special Instructions */}
              <div className="form-group">
                <label htmlFor="instructions">Special Instructions</label>
                <textarea className="form-control" id="instructions" name="instructions" rows="3" placeholder="Special instructions or requests..."></textarea>
              </div>

              {/* Contact Information */}
              <div className="form-group">
                <label htmlFor="contact">Contact Information</label>
                <input type="text" className="form-control" id="contact" name="contact" placeholder="Your contact information..." required />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          {/* Notifications Section */}
          <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px', height: '300px', overflowY: 'scroll' }}>
            <h3 className="text-center mb-4">Notifications</h3>
            {/* Notification items */}
            <div className="notification-item">
              <p>Notification content 1</p>
            </div>
            <div className="notification-item">
              <p>Notification content 2</p>
            </div>
            {/* Add more notifications as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routerequests;
