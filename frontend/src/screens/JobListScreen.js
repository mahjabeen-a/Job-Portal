import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createJob, listjobs } from '../actions/jobActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {useNavigate} from 'react-router-dom';
import { JOB_CREATE_RESET } from '../constants/jobConstants';

export default function JobListScreen(props) {
  const navigate = useNavigate();
  const jobList = useSelector((state) => state.jobList);
  const { loading, error, jobs } = jobList;
  const jobCreate = useSelector((state) => state.jobCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    job: createdJob,
  } = jobCreate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: JOB_CREATE_RESET });
      navigate(`/jobs/${createdJob._id}/edit`);
    }
    dispatch(listjobs());
  }, [createdJob, dispatch, navigate, successCreate]);
  const deleteHandler = () => {
    /// TODO: dispatch delete action
  };
  const createHandler = () => {
    dispatch(createJob());
  };
  return (
    <div>
      <div className="row">
        <h1>Jobs</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Job
        </button>
      </div>
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
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
                    onClick={() => navigate(`/jobs/${job._id}/edit`)}
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