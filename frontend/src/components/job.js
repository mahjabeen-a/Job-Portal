import React from 'react';
import { Link } from 'react-router-dom';


export default function Job(props) {
  const { job } = props;
  return (
    <div key={job._id} className="card">
    
      <div className="card-body">
        <Link to = {`/jobs/${job._id}`}>
          <h2>{job.name}</h2>
        </Link>
    
        <div className="price">Position: {job.position}</div>
        <div className="price">Vacancy: {job.vacancy}</div>
      </div>
    </div>
  );
}