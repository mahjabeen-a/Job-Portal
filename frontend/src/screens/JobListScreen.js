import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createJob, deleteJob, listjobs } from '../actions/jobActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {useNavigate} from 'react-router-dom';
import { JOB_CREATE_RESET, JOB_DELETE_RESET } from '../constants/jobConstants';

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

  const jobDelete = useSelector((state) => state.jobDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = jobDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    
    if (successCreate) {
      dispatch({ type: JOB_CREATE_RESET });
      navigate(`/jobs/${createdJob._id}/edit`);
    }

    if (successDelete) {
      dispatch({ type: JOB_DELETE_RESET });
    }

    dispatch(listjobs());
  }, [createdJob, dispatch, navigate, successCreate, successDelete]);
  const deleteHandler = (job) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteJob(job._id));
    }
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
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      
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