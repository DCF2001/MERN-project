import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import { deletestaffmember, updatestaffmember } from "../../../api/controllers/staffmember";
export default function AddStaffMember() {
  const navigate = useNavigate();

  const [mname, setMName] = useState("");
  const [memail, setMEmail] = useState("");
  const [mphone, setMPhone] = useState("");
  const [mdate, setMDate] = useState("");
  const [maddress, setMAddress] = useState("");
  const [mage, setMAge] = useState("");
  const [mgender, setMGender] = useState("");
  const [mrole, setMRole] = useState("");
  const [mnic, setMNIC] = useState("");
  const [mwdays, setMWDays] = useState("");
  const [msalary, setMSalary] = useState("");
  const [error, setError] = useState(false);
  const location = useLocation();
  const data = location.state;


  const buttonStyle = {
    borderRadius: "10px", backgroundColor: "#FFFF", border: "2px solid ", color: "#333", padding: "8px 16px", marginRight: "8px"
  };
  
  // Hover effect
  const handleHover = (e) => {
    e.target.style.backgroundColor = 'lightgray';
  };
  
  // Remove hover effect
  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = 'white';
  };

  function sendData(e) {
    e.preventDefault();

    const newstaffmember = {
      mname,
      memail,
      mphone,
      mdate,
      maddress,
      mage,
      mgender,
      mrole,
      mnic,
      mwdays,
      msalary
    };

    if (
      mname.length === 0 ||
      memail.length === 0 ||
      mphone.length === 0 ||
      mdate.length === 0 ||
      maddress.length === 0 ||
      mage.length === 0 ||
      mgender.length === 0 ||
      mrole.length === 0 ||
      mnic.length === 0 ||
      mwdays.length === 0 ||
      msalary.length === 0
    ) {
      setError(true);
      return;
    }

    axios
      .post("/api/staffmember/add", newstaffmember)
      .then(() => {
        alert("Staff member added successfully");
        setMName("");
        setMEmail("");
        setMPhone("");
        setMDate("");
        setMAddress("");
        setMAge("");
        setMGender("");
        setMRole("");
        setMNIC("");
        setMWDays("");
        setMSalary("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  var date = new Date();
  date.setDate(date.getDate() + 7);

  return (
    
    <div>
      <div className="card bg-dark text-white">
        <div style={{ backgroundColor: "#114232" ,padding:"10px"}}>
          <div className="card-img-overlay">
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "50px", marginRight: "20px" }}>
          <Link to="/StaffSalaryReport" style={{ textDecoration: 'none' }}>
        <button className="btn btn-success" style={buttonStyle }>
          <br />
          SALARY
          <br />
        </button>
      </Link>
            
      <Link to="/ViewStaffRequest" style={{ textDecoration: 'none' }}>
        <button className="btn btn-success" style={buttonStyle}>
          <br />
          REQUEST
          <br />
        </button>
      </Link>
            <br></br>
            <Link to="/AllStaffMember" style={{ textDecoration: 'none' }}>
        <button className="btn btn-success" style={buttonStyle}>
          <br />
          STAFF
          <br />
        </button>
      </Link>
            
        </div>
            <br></br>
            <br></br>
            <h1 className="card-title" style={{ fontSize: "50px" }}>
              <b>ADD NEW</b> <b className="text-success">STAFF</b>
            </h1>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div>
        <div style={{ width: "1000px", backgroundColor: "#E0E0E0" }}>
        <div style={{ padding: "20px" }}>
          <h1 style={{ color: "#28a745" }}>
            <b>ADD NEW MEMBER</b>
          </h1>
            <br></br>
            

            <form className="row g-3 was-validated">
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Name:</b>
                </label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMName(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {error && mname.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Name can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Email:</b>
                </label>
                <input
                  type="email"
                  className="form-control is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMEmail(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {error && memail.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Email can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Phone No:</b>
                </label>
                <input
                  type="number"
                  className="form-control is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMPhone(e.target.value = e.target.value.slice(0, 10));
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {error && mphone.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Phone No can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Date:</b>
                </label>
                <input
                  type="date"
                  className="form-control is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  min={new Date().toISOString().split("T")[0]}
                  max={date.toISOString().split("T")[0]}
                  onChange={(e) => {
                    setMDate(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {error && mdate.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Date can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Address:</b>
                </label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMAddress(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {error && maddress.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Address can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Age:</b>
                </label>
                <input
                  type="number"
                  className="form-control is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMAge(e.target.value = e.target.value.slice(0, 2));
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {error && mage.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Age can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Gender:</b>
                </label>
                <select
                  className="form-select is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMGender(e.target.value);
                  }}
                  required
                >
                  <option value="">Open this select menu</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div className="invalid-feedback">
                  {error && mgender.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Gender can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Role:</b>
                </label>
                <select
                  className="form-select is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMRole(e.target.value);
                  }}
                  required
                >
                  <option value="">Open this select menu</option>
                  <option value="Male">Recycling Facility Manager</option>
                  <option value="Female">Driver</option>
                  <option value="Male">Cleaner</option>
                  <option value="Female">Waste Collection Supervisor</option>
                  <option value="Male">Recycling Workers</option>
                </select>
                <div className="invalid-feedback">
                  {error && mrole.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Role can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>NIC:</b>
                </label>
                <input
                  type="number"
                  className="form-control is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMNIC(e.target.value = e.target.value.slice(0, 12));
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {error && mnic.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>NIC can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Working Days Per Month:</b>
                </label>
                <select
                  className="form-select is-invalid"
                  id="validationServer01"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setMWDays(e.target.value);
                  }}
                  required
                >
                  <option value="">Open this select menu</option>
                  <option value="7 Days">7 Days</option>
                  <option value="14 Days">14 Days</option>
                  <option value="21 Days">21 Days</option>
                  <option value="30 Days">30 Days</option>
                </select>
                <div className="invalid-feedback">
                  {error && mwdays.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Working Days can't be empty!</lable> : ""}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationServer01" className="form-label" style={{ float: "left" }}>
                  <b>Salary:</b>
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text">Rs.</span>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServer01"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setMSalary(e.target.value);
                    }}
                    required
                  />
                  <span className="input-group-text">.00</span>
                  <div className="invalid-feedback">
                    {error && msalary.length <= 0 ? <lable className="text" style={{ color: "#FF0000" }}>Salary can't be empty!</lable> : ""}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <br></br>
                <button type="submit" className="btn btn-success" onClick={sendData} style={{ borderRadius: "12px", backgroundColor: "#FFFF", border: "1px solid ", color: "#333", padding: "8px 16px", marginRight: "10px" }}>
  SUBMIT
</button>
<Link to="/AllStaffMembers" style={{ textDecoration: "none" }}>
  <button type="button" className="btn btn-success" style={{ borderRadius: "12px", backgroundColor: "#FFFF", border: "1px solid ", color: "#333", padding: "8px 16px", marginRight: "10px" }}>
    VIEW
  </button>
</Link>

                <br></br>
               
              </div>
            </form>

            <br></br>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="card bg-dark text-white" style={{ height: "350px", width: "100%", background: "#114232" }}>
        <div className="card-img-overlay">
          <br></br>
          <h3 className="card-title" style={{ float: "left" }}>
            <b className="text-success">CONTACT</b>
          </h3>

          <br></br>
          <div style={{ backgroundColor: "#114232" }}>
            <div style={{ float: "left" }}>
              <h5 style={{ textAlign: "left" }}>
                <i className="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;GreenBingarbagemanagement@gmail.com
              </h5>
              <br></br>
              <h5 style={{ textAlign: "left" }}>
                <i className="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580
              </h5>
              <br></br>
              <h5 style={{ textAlign: "left" }}>
                <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe
              </h5>
            </div>
          </div>

          <div style={{ float: "right", width: "50%" }}>
            <h5 style={{ textAlign: "left" }}>HOME</h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>ABOUT US</h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>WORKING DAYS</h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>SERVICES</h5>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <h3 style={{ float: "left", marginLeft: "80%" }}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h3>
        </div>
      </div>
    </div>
  );
}
