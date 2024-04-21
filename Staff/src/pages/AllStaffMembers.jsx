import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StaffMemberList() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("/api/staffmember/getall")
      .then(response => {
        setStaffMembers(response.data); 
      })
      .catch(error => {
        console.error("Error fetching staff members:", error);
      });
  }, []);

  const handleDelete = async (staffId) => {
    try {
      const res = await fetch(`/api/staffmember/delete/${staffId}`, {
        method: 'DELETE',
      });
  
      if (!res.ok) {
        // Handle error response from server (e.g., display error message to user)
        const errorData = await res.json();
        console.error('Error deleting staff member:', errorData.message);
        return;
      }
  
      setStaffMembers(prevStaffMembers => prevStaffMembers.filter(staffMember => staffMember._id !== staffId));
  
    } catch (error) {
      console.error('Error deleting staff member:', error.message);
    }
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
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "100%", boxSizing: "border-box" }}
      />
      <table style={{ fontFamily: "arial, sans-serif", borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Address</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Age</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Gender</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Role</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>NIC</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Working Days</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Salary</th>
            <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaffMembers.map((staffMember, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2" }}>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mname}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.memail}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mphone}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mdate}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.maddress}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mage}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mgender}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mrole}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mnic}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.mwdays}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{staffMember.msalary}</td>
              <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(staffMember._id)} style={{ borderRadius: "12px", backgroundColor: "#FFFF", border: "1px solid ", color: "#333", padding: "8px 16px", marginRight: "10px" }}>Delete</button>
                
                <button className="btn btn-danger btn-sm" onClick={() => handleupdate(staffMember.mname)} style={{ borderRadius: "12px", backgroundColor: "#FFFF", border: "1px solid ", color: "#333", padding: "8px 16px", marginRight: "10px" }}>Update</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
