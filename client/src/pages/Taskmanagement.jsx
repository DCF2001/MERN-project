import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import TaskHeader from '../components/Headertaskmanagement';
import backgroundImage from '../../src/images/backgroundimage.jpg';
import UpdateForm from '../pages/UpdateForm'; // Import your update form component
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [taskDetails, setTaskDetails] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false); // State for update form visibility

  // Fetch all tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/createtask/getall');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleUpdate = async (id) => {
    try {
      // Perform update operation with the specified ID
      await axios.put(`http://localhost:3001/vehiclerequests/update/${updateId}`);
      alert('Task updated successfully!');
      fetchTasks(); // Refresh tasks after update
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Error updating task. Please try again later.');
    }
  };

  const handleDelete = async (id) => {
    try {
      // Perform delete operation with the specified ID
      await axios.delete(`http://localhost:3001/createtask/delete/${id}`);
      alert('Task deleted successfully!');
      fetchTasks(); // Refresh tasks after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Error deleting task. Please try again later.');
    }
  };

  const handleSearch = () => {
    // Filter tasks based on the searchQuery
    const results = tasks.filter(task =>
      task.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const generatePDFReport = () => {
    // Select the element containing your table (e.g., <table>)
    const tableElement = document.getElementById('taskTable');

    html2canvas(tableElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('task_report.pdf');
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <TaskHeader />
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '50vh' }}>
        <div className="flex justify-center items-start min-h-screen">
          <div className="container mx-auto py-8">
            <h2 className="text-3xl mb-4" style={{ color: '#FCDC2A', fontWeight: 'normal', fontStyle: 'italic' }}>Task Management</h2>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSearch}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <FaSearch />
              </button>
            </div>
            <div className="table-responsive">
              <table id="taskTable" className="table table-bordered bg-white">
                <thead className="bg-green-900 text-white">
                  <tr>
                    <th></th>
                    <th style={{ fontFamily: 'Arial, sans-serif' }}>Task Name</th>
                    <th style={{ fontFamily: 'Arial, sans-serif' }}>Property Type</th>
                    <th style={{ fontFamily: 'Arial, sans-serif' }}>Service</th>
                    <th style={{ fontFamily: 'Arial, sans-serif' }}>Other Services</th>
                    <th style={{ fontFamily: 'Arial, sans-serif' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(searchResults.length > 0 ? searchResults : tasks).map((task, index) => (
                    <tr
                      key={task._id}
                      className="border border-gray-400 hover:bg-gray-200"
                    >
                      <td>{index + 1}</td>
                      <td>{task.Name}</td>
                      <td>{task.Property_Type}</td>
                      <td>{task.Service}</td>
                      <td>{task.Other_Services}</td>
                      <td>
                        <button onClick={() => { setUpdateId(task._id); setShowUpdateForm(true); }} className="btn btn-primary">
                          Update Task
                        </button>
                        <button onClick={() => handleDelete(task._id)} className="btn btn-danger ml-2">
                          Delete Task
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Modal or popup for update form */}
            {showUpdateForm && <UpdateForm taskId={updateId} onClose={() => setShowUpdateForm(false)} />}
            <button onClick={generatePDFReport} className="btn btn-primary">
              Download PDF Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
