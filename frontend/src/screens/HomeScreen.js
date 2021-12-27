import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Job from '../components/job';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function HomeScreen() {
  const [jobs, setjobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try{
          setLoading(true);
      const { data } = await axios.get('/api/jobs');
      setLoading(false);
      setjobs(data);
      }catch(err){
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
       {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
      <div className="row center">
        {jobs.map((job) => (
          <Job key = {job._id} job ={job}></Job>
        ))}
      </div>
      )}
    </div>
  );
}
