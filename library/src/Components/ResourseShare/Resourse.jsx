import React, { useEffect, useState } from 'react';
import axios from 'axios';
import S1 from '../../Images/Resource_Share/S (1).jpg';
import S2 from '../../Images/Resource_Share/S (2).jpg';
import S3 from '../../Images/Resource_Share/S (3).jpg';
import Footer from '../Footer/Footer'
export default function Resource() {
  const [resources, setResources] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch resources from the backend
    axios.get('http://localhost:5000/user/resources')
      .then(response => {
        setResources(response.data);
      })
      .catch(error => {
        console.error('Error fetching resources:', error);
      });
  }, []);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="">
        <h3 className="text-center my-4">Resource Sharing</h3>
        <div className="row">
          {resources.slice(0, showAll ? resources.length : 3).map((resource, index) => (
            <div className="col-sm-4" key={resource._id}>
              <div className="card">
                <img 
                  src={index === 0 ? S1 : index === 1 ? S2 : S3} 
                  className="card-img-top img-fluid" 
                  alt="Resource"
                />
                <div className="card-body">
                  <h5 className="card-title">{resource.studentName} ({resource.rollNo})</h5>
                  <h6>Email_Id: {resource.email}</h6>
                  <p className="card-text">{resource.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {resources.length > 3 && (
          <div className="text-center my-4">
            <button onClick={toggleView} className="btn btn-secondary">
              {showAll ? 'View Less' : 'View All'}
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
