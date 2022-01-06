import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listjobs } from '../actions/jobActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Job from '../components/job';

export default function SearchScreen(props) {
  const { name = 'all' } = useParams();
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.jobList);
  const { loading, error, jobs } = jobList;
  useEffect(() => {
    dispatch(listjobs({ name: name !== 'all' ? name : '' }));
  }, [dispatch, name]);
  return (
    <div>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{jobs.length} Results</div>
        )}
      </div>
      <div className="row top">
        <div className="col-1">
        {/*  <h3>Department</h3>
          <ul>
            <li>Category 1</li>
        </ul>*/}
        </div>
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {jobs.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row center">
                {jobs.map((job) => (
                  <Job key={job._id} job={job}></Job>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}