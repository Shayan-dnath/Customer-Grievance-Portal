import React from 'react';
import redressal from '../images/redressal.png'

const RedressalPage = () => {
 return (
   <div className="container">
     <h2>Grievance Redressal</h2>
     <p>This page provides information on how customer grievances are addressed and resolved.</p>
     <div className="row">
       <div className="col-md-6">
         <img src={redressal} className="img-fluid" alt="Redressal Process" />
       </div>
       <div className="col-md-6">
         <h3>Our Redressal Process</h3>
         <ol>
           <li>Complaint Registration</li>
           <li>Initial Assessment</li>
           <li>Investigation</li>
           <li>Resolution</li>
           <li>Follow-up</li>
         </ol>
         <p>
           We have a dedicated team that promptly addresses and resolves customer grievances. Our aim
           is to provide a satisfactory resolution within the shortest possible time.
         </p>
       </div>
     </div>
   </div>
 );
};

export default RedressalPage;