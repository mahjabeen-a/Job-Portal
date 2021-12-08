import React from 'react';
import Job from '../components/job';
import data from '../data';

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.jobs.map((job) => (
          <Job key = {job._id} job ={job}></Job>
        ))}
      </div>
    </div>
  );
}
