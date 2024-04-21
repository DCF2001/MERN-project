import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Link } from 'react-router-dom';

export default function ViewStaffRequest() {
    const conponentPDF = useRef();
    const [staffrequests, setStaffRequests] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        function getStaffRequests() {
            axios.get("http://localhost:3000/staffrequest/staffrequests").then((res) => {
                setStaffRequests(res.data);
            }).catch((err) => {
                alert(err.message);
            });
        }
        getStaffRequests();
    }, []);

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "userdata",
        onAfterPrint: () => alert("Download Successfully")
    });

    return (
        <div>
            <div className="card" style={{ background: '#114232', color: '#fff' }}>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <img src="homebg.png" className="card-img" alt="..." style={{ height: '275px', filter: 'brightness(40%)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <h1 style={{ fontSize: '50px', marginBottom: '0' }}><b>VIEW STAFF REQUEST</b> <b style={{ color: '#28a745' }}></b></h1>
                    </div>
                </div>
            </div>

            <div style={{ width: '1350px' }}>
                <br /><br /><br /><br /><br /><br />
                <div>
                    <div ref={conponentPDF} style={{ width: '100%' }}>
                        <table style={{ background: '#28a745', color: '#fff' }}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Number of Staff</th>
                                    <th>Area of Work</th>
                                    <th>Date</th>
                                    <th>Contact No</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffrequests.filter((staffrequest) => {
                                    return search.toString().toLowerCase() === '' ? staffrequest : staffrequest.workarea.toString().toLowerCase().includes(search);
                                }).map((staffrequest, index) => {
                                    return (
                                        <tr key={staffrequest._id}>
                                            <td>{index + 1}</td>
                                            <td>{staffrequest.staffsize}</td>
                                            <td>{staffrequest.workarea}</td>
                                            <td>{staffrequest.reqdate}</td>
                                            <td>{staffrequest.cnumber}</td>
                                            <td>{staffrequest.reqstatus}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br />
                    <a className="btn btn-outline-success" href="#" onClick={generatePDF}>
                        <i className="fas fa-download"></i>&nbsp;Download
                    </a>
                </div>
            </div>

            <br /><br /><br />
            <div className="card" style={{ height: '350px', width: '100%', background: '#114232', color: '#FFFFFF' }}>
                <div style={{ textAlign: 'left' }}>
                    <h3><b>Contact</b></h3>
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                    <i className="fa-brands fa-instagram fa-2xl"></i>
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                    <br /><br />
                    <div style={{ float: 'left' }}>
                        <h5><i className="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;ecowaste@gmail.com</h5>
                        <br />
                        <h5><i className="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
                        <br />
                        <h5><i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>
                    </div>
                    <div style={{ float: 'right', width: '50%' }}>
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
