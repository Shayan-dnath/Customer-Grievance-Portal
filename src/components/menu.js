import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
 return (
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav ml-auto">
       <li className="nav-item">
         <Link className="nav-link" to="/customer-form">
           Customer Form
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/complaints">
           Customer Complaints
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/redressal">
           Redressal Page
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/about">
           About Us
         </Link>
       </li>
     </ul>
   </div>
 );
};

export default Menu;