// Dashboard.js
import React from 'react';
import comform from '../images/ComplaintForm.png'
import viewcomp from '../images/viewcomp.png'
import redressal from '../images/redressal.png'


const Dashboard = () => {
  return (
    <div>
      <div className="jumbotron bg-light">
        <div className="container">
          <h1 className="display-4">Welcome to the Customer Grievance System</h1>
          <p className="lead">We value your feedback and strive to provide the best possible service.</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={comform} height={265} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Register Complaint</h5>
                <p className="card-text">Share your concerns with us through our user-friendly complaint form.</p>
                <a href="/customer-form" className="btn btn-primary">Register Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={viewcomp} height={265} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">View Complaints</h5>
                <p className="card-text">Stay updated on the complaints submitted by our customers.</p>
                <a href="/complaints" className="btn btn-primary">View Complaints</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={redressal} height={265} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Redressal Process</h5>
                <p className="card-text">Learn how we address and resolve customer grievances promptly.</p>
                <a href="/redressal" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;