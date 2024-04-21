import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StaffMemberList() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMember, setSelectedMember] = useState(null); // To track selected member for update
  const [showUpdateForm, setShowUpdateForm] = useState(false); // To toggle update form/modal

  useEffect(() => {
    fetchStaffMembers();
  }, []);

  const fetchStaffMembers = () => {
    axios.get("/api/staffmember/getall")
      .then(response => {
        setStaffMembers(response.data); 
      })
      .catch(error => {
        console.error("Error fetching staff members:", error);
      });
  };

  const handleDelete = (name) => {
    axios.delete(`/api/staffmember/delete/${name}`)
      .then(() => {
        setStaffMembers(staffMembers.filter(member => member.mname !== name));
        alert("Staff member deleted successfully");
      })
      .catch(error => {
        console.error("Error deleting staff member:", error);
        alert("Error deleting staff member. Please try again.");
      });
  };

  const handleUpdate = (member) => {
    setSelectedMember(member); // Set the selected member for update
    setShowUpdateForm(true); // Show the update form/modal
  };

  const handleUpdateSubmit = (updatedMember) => {
    axios.put(`/api/staffmember/update`, updatedMember)
      .then(() => {
        // Update local state with the updated member
        const updatedMembers = staffMembers.map(member =>
          member.id === updatedMember.id ? updatedMember : member
        );
        setStaffMembers(updatedMembers);
        setShowUpdateForm(false); // Hide the update form/modal
        alert("Staff member updated successfully");
      })
      .catch(error => {
        console.error("Error updating staff member:", error);
        alert("Error updating staff member. Please try again.");
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStaffMembers = staffMembers.filter(member =>
    member.mname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "green" }}>All Staff Members</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "20px", padding: "8px", width: "100%", boxSizing: "border-box" }}
      />
      {showUpdateForm && selectedMember && (
        <UpdateForm
          member={selectedMember}
          onSubmit={handleUpdateSubmit}
          onCancel={() => setShowUpdateForm(false)}
        />
      )}
      <table style={{ fontFamily: "arial, sans-serif", borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Address</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>NIC</th>
            <th>Working Days</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaffMembers.map((staffMember, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2" }}>
              <td>{staffMember.mname}</td>
              <td>{staffMember.memail}</td>
              <td>{staffMember.mphone}</td>
              <td>{staffMember.mdate}</td>
              <td>{staffMember.maddress}</td>
              <td>{staffMember.mage}</td>
              <td>{staffMember.mgender}</td>
              <td>{staffMember.mrole}</td>
              <td>{staffMember.mnic}</td>
              <td>{staffMember.mwdays}</td>
              <td>{staffMember.msalary}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(staffMember.mname)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary btn-sm ml-2"
                  onClick={() => handleUpdate(staffMember)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// UpdateForm component to edit a staff member
function UpdateForm({ member, onSubmit, onCancel }) {
  const [updatedMember, setUpdatedMember] = useState({ ...member });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMember({ ...updatedMember, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(updatedMember);
  };

  return (
    <div>
      <h2>Update Staff Member</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="mname" value={updatedMember.mname} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="memail" value={updatedMember.memail} onChange={handleChange} />
        </label>
        {/* Add other fields as needed */}
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
