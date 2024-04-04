import React from 'react';

const Vehiclerequests = () => {
  return (
    <div className="container" style={{ backgroundImage: 'url("taskmanagement/src/pages/pictures/pexels-jakub-novacek-924824.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={{ backgroundColor: '#114232', color: 'white', padding: '20px', borderRadius: '5px' }}>
            <h3 className="text-center mb-4">Vehicle Requests</h3>
            <form action="/submit_vehicle_request" method="POST">
              {/* Personal Information */}
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input type="text" className="form-control" id="fname" name="firstname" placeholder="Your first name.." required />
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input type="text" className="form-control" id="lname" name="lastname" placeholder="Your last name.." required />
              </div>

              {/* Service Details */}
              <div className="form-group">
                <label htmlFor="serviceType">Type of Service Requested</label>
                <select className="form-control" id="serviceType" name="serviceType" required>
                  <option value="">Select service type...</option>
                  <option value="garbageCollection">Garbage Collection</option>
                  <option value="recycling">Recycling</option>
                  <option value="specialWasteDisposal">Special Waste Disposal</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="frequency">Frequency of Service</label>
                <select className="form-control" id="frequency" name="frequency" required>
                  <option value="">Select frequency...</option>
                  <option value="oneTime">One-Time</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="collectionDays">Preferred Collection Days or Schedule</label>
                <input type="text" className="form-control" id="collectionDays" name="collectionDays" placeholder="Preferred collection days or schedule..." />
              </div>

              <div className="form-group">
                <label htmlFor="wasteType">Type and Amount of Waste</label>
                <input type="text" className="form-control" id="wasteType" name="wasteType" placeholder="Type and amount of waste..." />
              </div>

              <div className="form-group">
                <label htmlFor="specialInstructions">Special Instructions or Requests</label>
                <textarea className="form-control" id="specialInstructions" name="specialInstructions" rows="3" placeholder="Special instructions or requests..."></textarea>
              </div>

              {/* Property Information */}
              <div className="form-group">
                <label htmlFor="propertyType">Property Type</label>
                <select className="form-control" id="propertyType" name="propertyType" required>
                  <option value="">Select property type...</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px', height: '300px', overflowY: 'scroll' }}>
            <h3 className="text-center mb-4">Notifications</h3>
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
              {/* Add more notifications as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehiclerequests;
