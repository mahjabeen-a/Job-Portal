import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { detailsjob } from '../actions/jobActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function JobScreen(props) {
 
  const dispatch = useDispatch();
  const jobId = useParams().id;
  const jobDetails = useSelector((state) => state.jobDetails);
  const { loading, error, job } = jobDetails;

  useEffect(() => {
    dispatch(detailsjob(jobId));
  }, [dispatch, jobId]);

  return (
  <div>
       {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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
            <li>salary : Rs {job.salary}</li>
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
                  <div className="price">Rs {job.salary}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {job.vacancy > 0 ? (
                      <span className="success">Applications Open</span>
                    ) : (
                      <span className="danger">Application Closed</span>
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
   )}
  </div>
  );
    
} 