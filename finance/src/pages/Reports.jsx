import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import backgroundImage from '../Images/abcnew.jpg';

const FinancialReport = () => {
  const [formData, setFormData] = useState({
    Date: '',
    Income_Amount: '',
    Amount_of_Expenditure: '',
    Special_Note: '',
  });
  const [notifications, setNotifications] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNaN(formData.Income_Amount) || isNaN(formData.Amount_of_Expenditure)) {
        setValidationError('Income Amount and Amount of Expenditure must be numeric values.');
        return;
      }

      if (updateId) {
        await axios.put(`http://localhost:3000/Reportgenerate/update/${updateId}`, formData);
        alert('Report updated successfully!');
        setUpdateId(null);
      } else {
        await axios.post('http://localhost:3000/Reportgenerate/add', formData);
        alert('Form submitted successfully!');
      }
      setFormData({
        Date: '',
        Income_Amount: '',
        Amount_of_Expenditure: '',
        Special_Note: '',
      });
      fetchNotifications();
      setValidationError('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Error submitting form: ${error}`);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Reportgenerate/getall');
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
      await axios.delete(`http://localhost:3000/Reportgenerate/delete/${id}`);
      alert('Request deleted successfully!');
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting request:', error);
      alert('Error deleting request. Please try again later.');
    }
  };

  const handleIncomeChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '') {
      setFormData({ ...formData, Income_Amount: value });
      setValidationError('');
    } else {
      setValidationError('Please enter a valid numeric value.');
    }
  };

  const handleExpenditureChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '') {
      setFormData({ ...formData, Amount_of_Expenditure: value });
      setValidationError('');
    } else {
      setValidationError('Please enter a valid numeric value.');
    }
  };

  const downloadPDF = (notification) => {
    const doc = new jsPDF();

    doc.text(`Date: ${notification.Date}`, 20, 20);
    doc.text(`Income Amount: ${notification.Income_Amount}`, 20, 30);
    doc.text(`Amount of Expenditure: ${notification.Amount_of_Expenditure}`, 20, 40);
    doc.text(`Special Notes: ${notification.Special_Note}`, 20, 50);

    const fileName = `Financial_Report_${notification._id}.pdf`;
    doc.save(fileName);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <div className="bg-white rounded-lg shadow-lg p-6" style={{ backgroundColor: '#cce6cc' }}>
          <h2 className="text-center text-2xl font-bold mb-4">Financial Report</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.Date}
                onChange={(e) => setFormData({ ...formData, Date: e.target.value })}
                className="form-input mt-1 block w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="incomeAmount" className="block text-sm font-medium">Income Amount</label>
              <input
                type="text"
                id="incomeAmount"
                name="incomeAmount"
                value={formData.Income_Amount}
                onChange={handleIncomeChange}
                className="form-input mt-1 block w-full"
                placeholder="Enter income amount..."
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expenditureAmount" className="block text-sm font-medium">Amount of Expenditure</label>
              <input
                type="text"
                id="expenditureAmount"
                name="expenditureAmount"
                value={formData.Amount_of_Expenditure}
                onChange={handleExpenditureChange}
                className="form-input mt-1 block w-full"
                placeholder="Enter amount of expenditure..."
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="specialNotes" className="block text-sm font-medium">Special Notes</label>
              <textarea
                id="specialNotes"
                name="specialNotes"
                value={formData.Special_Note}
                onChange={(e) => setFormData({ ...formData, Special_Note: e.target.value })}
                className="form-textarea mt-1 block w-full"
                rows="3"
                placeholder="Enter special notes..."
              ></textarea>
            </div>

            {validationError && <p className="text-red-500">{validationError}</p>}

            <div className="mb-4">
              <button type="submit" style={{ backgroundColor: '#305830' }} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                {updateId ? 'Update Request' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div style={{ width: '50%', paddingLeft: '20px' }}>
        <div className="bg-white rounded-lg shadow-lg p-6 h-full" style={{ backgroundColor: '#cce6cc' }}>
          <h3 className="text-2xl font-bold mb-4">Notifications</h3>
          <div style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
            {notifications.map((notification) => (
              <div key={notification._id} className="mb-4 p-4 border border-gray-300 rounded-lg">
                <p>Date: {notification.Date}</p>
                <p>Income Amount: {notification.Income_Amount}</p>
                <p>Amount of Expenditure: {notification.Amount_of_Expenditure}</p>
                <p>Special Notes: {notification.Special_Note}</p>
                <div className="mt-2">
                  <button style={{ backgroundColor: '#305830' }} className="hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleUpdate(notification._id, notification)}>Update </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteNotification(notification._id)}>Delete </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => downloadPDF(notification)}>Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReport;
