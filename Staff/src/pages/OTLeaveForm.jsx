import React, { useState } from "react";

function OTLeaveForm() {
  const [otHours, setOTHours] = useState(0);
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log({
      otHours,
      leaveType,
      startDate,
      endDate,
      reason,
    });
    // You can send this data to an API or handle it as needed
  };

  return (
    <div>
      <h2>OT Hours and Leave Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>OT Hours:</label>
          <input
            type="number"
            value={otHours}
            onChange={(e) => setOTHours(e.target.value)}
          />
        </div>
        <div>
          <label>Leave Type:</label>
          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="">Select Leave Type</option>
            <option value="Vacation">Vacation</option>
            <option value="Sick">Sick</option>
            <option value="Personal">Personal</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label>Reason:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OTLeaveForm;
