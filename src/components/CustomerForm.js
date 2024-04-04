import React, { useState } from 'react';

const CustomerForm = ({ setComplaints }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new complaint to the list of complaints
    setComplaints((prevComplaints) => [
      ...prevComplaints,
      {
        id: prevComplaints.length + 1,
        title: formData.name,
        description: formData.complaint,
      },
    ]);
    // Reset the form data
    setFormData({ name: '', email: '', complaint: '' });
  };

  return (
    <div className="container">
      <h2>Customer Grievance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            className="form-control"
            id="complaint"
            name="complaint"
            rows="5"
            value={formData.complaint}
            onChange={handleChange}
          ></textarea>
        </div>
        <br></br>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;