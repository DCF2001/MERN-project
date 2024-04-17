import React from 'react';

const Header = () => {
  return (
    <div>
      <br />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <style>
        {`
        .nav-tabs-container {
          margin-bottom: 20px;
          align: right;
        }
        `}
      </style>
      
      <div className="container">
        <div className="nav-tabs-container">
          <ul className="nav nav-tabs" role="tablist">
            <li ><a href="#" >Schedule</a></li>
            <li><a href="#" >Contact</a></li>
            <li><a href="#" >My Account</a></li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-inverse" style={{ backgroundColor: '#114232' }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="/" style={{ color: '#FCDC2A' }}>Green Bin Garbage Management</a>
          </div>
          <div >
          <ul className="nav navbar-nav navbar-right">
  <li className="active">
    <a href="Vehiclerequests" style={{ color: '#FFFF', textDecoration: 'none', backgroundColor: 'transparent', transition: 'background-color 0.3s'}} 
      onMouseEnter={(e) => e.target.style.backgroundColor = '#87A922'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
    >
      Request for a Vehicle
    </a>
  </li>
  <li className="active">
    <a href="Routerequests" style={{ color: '#FFFF', textDecoration: 'none', backgroundColor: 'transparent', transition: 'background-color 0.3s'}} 
      onMouseEnter={(e) => e.target.style.backgroundColor = '#87A922'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
    >
      Request for a route
    </a>
  </li>
  <li className="active">
    <a href="Createtask" style={{ color: '#FFFF', textDecoration: 'none', backgroundColor: 'transparent', transition: 'background-color 0.3s'}} 
      onMouseEnter={(e) => e.target.style.backgroundColor = '#87A922'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
    >
      Create a task
    </a>
  </li>
</ul>

                       
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Header;

