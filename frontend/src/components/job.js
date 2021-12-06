import React from 'react';


export default function Job(props) {
  const { job } = props;
  return (
    <div key={job._id} className="card">
    
      <div className="card-body">
        <a href={`/jobs/${job._id}`}>
          <h2>{job.name}</h2>
        </a>
    
        <div className="price">{job.position}</div>
      </div>
    </div>
  );
}