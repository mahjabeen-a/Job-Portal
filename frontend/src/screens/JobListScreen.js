import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listjobs } from '../actions/jobActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {useNavigate} from 'react-router-dom';

export default function JobListScreen(props) {
  const navigate = useNavigate();
  const jobList = useSelector((state) => state.jobList);
  const { loading, error, jobs } = jobList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listjobs());
  }, [dispatch]);
  const deleteHandler = () => {
    /// TODO: dispatch delete action
  };
  return (
    <div>
      <h1>Jobs</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>POSITIOM</th>
              <th>VACANCY</th>
              <th>SALARY</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>{job._id}</td>
                <td>{job.name}</td>
                <td>{job.position}</td>
                <td>{job.vacancy}</td>
                <td>{job.salary}</td>
                <td>{job.description}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => navigate(`/job/${job._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(job)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}