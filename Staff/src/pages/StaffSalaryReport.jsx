import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Link } from 'react-router-dom';

export default function StaffSalaryReport() {

    const conponentPDF = useRef();
    const [staffmembers, setStaffMembers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        function getStaffMembers() {
            axios.get("http://localhost:3000/staffmember/staffsalaryreport")
                .then((res) => {
                    setStaffMembers(res.data);
                    console.log(res);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getStaffMembers();
    }, []);

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "userdata",
        onAfterPrint: () => alert("Download Successfully")
    });

    const totalamount = staffmembers.reduce((total, staffmember) => {
        return total + staffmember.msalary;
    }, 0);

    return (
        <div>

            <div style={{ background: '#114232', color: '#fff', paddingTop: '50px', paddingBottom: '50px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '50px' }}><b>STAFF SALARY REPORT</b> <b style={{ color: '#28a745' }}></b></h1>
                </div>
            </div>

            <div style={{ width: '1000px', backgroundColor: '#E0E0E0', margin: '0 auto', padding: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '40px', color: '#28a745' }}><b>STAFF SALARY REPORT</b></h1>
                </div>

                <div ref={conponentPDF}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: '#343a40', color: '#fff' }}>
                            <tr>
                                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>No</th>
                                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Name</th>
                                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Email</th>
                                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>NIC</th>
                                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Date</th>
                                <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffmembers.filter((staffmember) => {
                                return search.toString().toLowerCase() === '' ? staffmember : staffmember.mnic.toString().toLowerCase().includes(search);
                            }).map((staffmember, index) => (
                                <tr key={staffmember._id} style={{ background: '#fff', color: '#000' }}>
                                    <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{index + 1}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                                        <a href={`/get/${staffmember._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{staffmember.mname}</a>
                                    </td>
                                    <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{staffmember.memail}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{staffmember.mnic}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{staffmember.mdate}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{staffmember.msalary}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="5" style={{ border: '1px solid #000', padding: '8px', textAlign: 'center' }}><b>Total Staff Salary</b></td>
                                <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'center', color: '#dc3545' }}><b>Rs.{totalamount}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', border: 'none', fontSize: '18px', cursor: 'pointer' }} onClick={generatePDF}>
                        <i className="fas fa-download"></i>&nbsp;Download
                    </button>
                </div>
            </div>

            <div style={{ background: '#114232', color: '#fff', paddingTop: '50px', paddingBottom: '50px', textAlign: 'center' }}>
                <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    <h3 style={{ fontSize: '30px' }}><b style={{ color: '#28a745' }}>CONTACT</b></h3>
                    <div style={{ float: 'left', textAlign: 'left' }}>
                        <h5><i className="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;ecowaste@gmail.com</h5>
                        <br />
                        <h5><i className="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
                        <br />
                        <h5><i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>
                    </div>
                    <div style={{ float: 'right', width: '50%', textAlign: 'left' }}>
                        <h5>HOME</h5>
                        <br />
                        <h5>ABOUT US</h5>
                        <br />
                        <h5>WORKING DAYS</h5>
                        <br />
                        <h5>SERVICES</h5>
                    </div>
                    <br /><br /><br />
                    <h style={{ float: 'left', marginLeft: '80%' }}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h>
                </div>
            </div>
        </div>
    );
}
