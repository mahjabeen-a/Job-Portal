import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { detailsjob } from '../actions/jobActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function JobScreen(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobId = useParams().id;
  //const [qty] = useState(1);
  const jobDetails = useSelector((state) => state.jobDetails);
  const { loading, error, job } = jobDetails;

  useEffect(() => {
    dispatch(detailsjob(jobId));
  }, [dispatch, jobId]);
  
  const addToCartHandler = () => {
    navigate(`/`);
  };
  /*const applyHandler = () => {
    //props.history.push('/signin?redirect=shipping');
    navigate(`/signin?redirect=/applicationform`);
  };*/
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
        <div className="col-1">
         
        </div>
        <div className="col-1">
          <ul>
            
              <h1>{job.name}</h1>
            <li><b>SALARY :</b> Rs {job.salary}</li>
            <li> <b>DESCRIPTION :</b>
              <p>{job.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
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
              {job.vacancy > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Application</div>
                            <button>1</button>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to wishlist
                        </button>
                        {/*
                        <button
                          onClick={applyHandler}
                          className="primary block"
                        >
                           Apply
                        </button>*/}    
                      </li>
                    </>
                  )}
            </ul>
          </div>
        </div>
      </div>
    </div>
   )}
  </div>
  );
    
} 