import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import CustomerForm from './components/CustomerForm';
import CustomerComplaintsPage from './components/CustomerComplaintsPage';
import RedressalPage from './components/RedressalPage';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import logo from './images/logo.png'; 
import './App.css';
import { Link } from 'react-router-dom';


const App = () => {
  const [complaints, setComplaints] = useState([]);

  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" width="80" height="60" className="rounding" />
              CUSTOMER GRIEVANCE PORTAL
            </Link>
            <Menu />
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/customer-form"
              element={<CustomerForm setComplaints={setComplaints} />}
            />
            <Route
              path="/complaints"
              element={<CustomerComplaintsPage complaints={complaints} />}
            />
            <Route path="/redressal" element={<RedressalPage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <footer className="bg-light py-3 mt-4">
          <div className="container">
            <p className="text-center mb-0">© 2024 Customer Grievance System. All rights reserved by Shayan.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;