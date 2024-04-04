import React from 'react';
import logo from '../images/logo.png'

const AboutUs = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <p>
        This page provides information about the company or organization handling the grievances.
      </p>
      <div className="row">
        <div className="col-md-6">
          <img src={logo} height={300} width={300} alt="About Us" className="rounding"/>
        </div>
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
           Your Voice Matters: Empowering Solutions, Resolving Concerns 
           Ensuring Your Satisfaction Through Swift and Effective Resolution.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Transparency</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;