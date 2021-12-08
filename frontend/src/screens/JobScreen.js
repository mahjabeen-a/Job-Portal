import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import { useParams } from 'react-router';

export default function JobScreen(props) {
  const { id } = useParams();
  const job = data.jobs.find((x) => x._id === id);
  if (!job) {
    return <div> job Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
         
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{job.name}</h1>
            </li>
            <li>salary : ${job.salary}</li>
            <li>
              Description:
              <p>{job.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Salary</div>
                  <div className="price">${job.salary}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {job.vacancy > 0 ? (
                      <span className="success">Applications Open</span>
                    ) : (
                      <span className="error">Application Closed</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Apply</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}