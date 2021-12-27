import React, { useEffect } from 'react';
import Job from '../components/job';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listjobs } from '../actions/jobActions';


export default function HomeScreen() {
  
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.jobList);
  const {loading, error, jobs } = jobList;
  //useEffect lets us express different kinds of side effects after a component renders.
  useEffect(() => {
    dispatch(listjobs());
  }, [dispatch]);
  return (
    <div>
       {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
   
      <div className="row center">
        {jobs && jobs.map((job) => (
          <Job key = {job._id} job ={job}></Job>
        ))}
      
      </div>
      )}
    </div>
  );
}
