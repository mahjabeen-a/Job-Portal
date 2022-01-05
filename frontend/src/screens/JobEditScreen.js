import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsjob } from '../actions/jobActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function JobEditScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { id: jobId } = params;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [vacancy, setVacancy] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const jobDetails = useSelector((state) => state.jobDetails);
  const { loading, error, job } = jobDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!job || job._id !== jobId) {
      dispatch(detailsjob(jobId));
    } else {
      setName(job.name);
      setPosition(job.position);
      setVacancy(job.Vacancy);
      setSalary(job.salary);
      setDescription(job.description);
    }
  }, [job, dispatch, jobId]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update job
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Job {jobId}</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="position">Position</label>
              <input
                id="position"
                type="text"
                placeholder="Enter position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="salary">Salary</label>
              <input
                id="salary"
                type="number"
                placeholder="0"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="Vacancy">Vacancy</label>
              <input
                id="vacancy"
                type="number"
                placeholder="0"
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}