import React from 'react';

class RequestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [], // Array to store the list of requests
      searchId: '', // To store the ID entered in the search field
      selectedRequest: null, // To store the selected request for opening in the form
      date: '',
      decision: '',
      amount: '',
      note: '',
      errors: {},
      generalError: '' // Added for general error message
    };
  }

  componentDidMount() {
    // Fetch requests when component mounts
    this.fetchRequests();
  }

  // Method to fetch the list of requests from the server
  fetchRequests = () => {
    // Make an API call to fetch the list of requests
    // Example:
    // fetch('/api/requests')
    //   .then(response => response.json())
    //   .then(data => this.setState({ requests: data }))
    //   .catch(error => console.error('Error fetching requests:', error));

    // For demonstration, initializing with mock data
    const mockRequests = [
      { id: 1, description: 'Request 1' },
      { id: 2, description: 'Request 2' },
      { id: 3, description: 'Request 3' }
    ];
    this.setState({ requests: mockRequests });
  }

  // Method to handle changes in the search input
  handleSearchChange = (event) => {
    this.setState({ searchId: event.target.value });
  }

  // Method to handle submission of the search form
  handleSearchSubmit = (event) => {
    event.preventDefault();
    const { searchId, requests } = this.state;
    // Find the request with the matching ID
    const selectedRequest = requests.find(request => request.id === parseInt(searchId));
    if (selectedRequest) {
      this.setState({ selectedRequest });
    } else {
      // Handle case where request is not found
      console.log('Request not found');
    }
  }

  // Method to handle opening the form with selected request data
  handleOpenForm = (request) => {
    this.setState({ selectedRequest: request });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted with data:', this.state);
      // Handle form submission here
    } else {
      this.setState({ errors, generalError: 'Invalid data. Please check the fields.' });
    }
  }

  validate = () => {
    const { date, amount } = this.state;
    let errors = {};

    // Date validation
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!date.trim()) {
      errors.date = 'Date is required';
    } else if (!dateRegex.test(date)) {
      errors.date = 'Invalid date format (use YYYY-MM-DD)';
    }

    // Amount validation
    if (!amount.trim()) {
      errors.amount = 'Amount is required';
    } else if (isNaN(amount)) {
      errors.amount = 'Amount must be a number';
    }

    return errors;
  }

  render() {
    const { requests, searchId, selectedRequest, date, decision, amount, note, errors, generalError } = this.state;
    return (
      <div className="flex justify-between">
        <div className="w-1/2 p-4">
          <form onSubmit={this.handleSearchSubmit}>
            <input
              type="text"
              value={searchId}
              onChange={this.handleSearchChange}
              placeholder="Enter request ID..."
            />
            <button type="submit">Search</button>
          </form>
          <ul>
            {requests.map(request => (
              <li key={request.id} onClick={() => this.handleOpenForm(request)}>
                Request ID: {request.id}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 p-4">
          {/* Render the form component with selected request data */}
          {selectedRequest && (
            <div>
              <h2>Selected Request: {selectedRequest.id}</h2>
              <form onSubmit={this.handleSubmit} style={{ backgroundColor: '#c7ddb5', padding: '20px', borderRadius: '5px', color: 'black', maxWidth: '500px', margin: '0 auto' }}>
                {/* Your form inputs */}
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="date" style={{ color: 'black', display: 'block' }}>Date:</label>
                  <input
                    type="text"
                    name="date"
                    value={date}
                    onChange={this.handleChange}
                    placeholder="Enter Date"
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="decision" style={{ color: 'black', display: 'block' }}>Decision:</label>
                  <select
                    name="decision"
                    value={decision}
                    onChange={this.handleChange}
                  >
                    <option value="">Select decision</option>
                    <option value="accept">Accept</option>
                    <option value="reject">Reject</option>
                  </select>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="amount" style={{ color: 'black', display: 'block' }}>Amount:</label>
                  <input
                    type="text"
                    name="amount"
                    value={amount}
                    onChange={this.handleChange}
                    placeholder="Enter Amount"
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="note" style={{ color: 'black', display: 'block' }}>Note:</label>
                  <textarea
                    name="note"
                    value={note}
                    onChange={this.handleChange}
                    placeholder="Enter Note"
                  />
                </div>
                <button type="submit" style={{ backgroundColor: '#114232', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>Submit</button>
              </form>
              {/* Error messages */}
              {generalError && <div className="text-red-500 mt-1">{generalError}</div>}
              {errors.date && <div className="text-red-500 mt-1">{errors.date}</div>}
              {errors.amount && <div className="text-red-500 mt-1">{errors.amount}</div>}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RequestList;
