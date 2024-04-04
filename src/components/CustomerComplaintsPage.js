import React, { useEffect, useState } from 'react';

const CustomerComplaintsPage = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    
    // For demonstration, a dummy array is used
    const dummyComplaints = [
      {
        id: 1,
        title: 'Slow response time',
        description: "I recently reached out to your customer service team regarding an issue I was experiencing, and I must admit I was a bit disappointed by the time it took to receive a response. As a loyal customer, I value prompt communication and assistance. I understand that delays can occur, but I believe there's room for improvement in this area. I hope you'll take this feedback constructively and work towards reducing response times in the future. Thank you for your attention to this matter.",
    
      
    },
      {
        id: 2,
        title: 'Incorrect billing',
        description: 'I recently received my bill and noticed some discrepancies that I believe need to be addressed. As a customer who values transparency and accuracy, I was surprised to see these errors. I trust that you will investigate this matter promptly and rectify any mistakes. Clear and correct billing is crucial for maintaining trust between a company and its customers, and I hope to see improvements in this regard moving forward. Thank you for your attention to this matter.',
      },
      {
        id: 3,
        title: 'Poor customer service',
        description: "I recently had an interaction with one of your customer service representatives, and unfortunately, it did not meet my expectations. I encountered [describe the specific issue or behavior]. As a loyal customer, I believe that excellent customer service is key to a positive experience with a company. I hope you'll take this feedback seriously and address any training or communication gaps within your team. I value our relationship and look forward to seeing improvements in the level of service provided. Thank you for your attention to this matter.",
      },
    ];
    setComplaints(dummyComplaints);
  }, []);

  return (
    <div className="container">
      <h2>Customer Complaints</h2>
      <div className="row">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{complaint.title}</h5>
                <p className="card-text">{complaint.description}</p>
                <hr />
<p className="card-text">
  <strong>Developer Response:</strong> We have received your complaint and our
  team is investigating it. We'll soon reach out to you.
</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerComplaintsPage;