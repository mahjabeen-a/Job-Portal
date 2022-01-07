import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ConfirmApplyScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const jobId = params.id;
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  console.log(orderCreate);
  const job_apply = cart.cartItems.find((x) => x.job === jobId);
  const { loading, success, error, order } = orderCreate;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {

    dispatch(createOrder({ ...cart, orderItems: cart.cartItems.find((x) => x.job === jobId) }));
   // console.log('helo');
   // console.log(cart.cartItems.find((x) => x.job === jobId));

  };
  useEffect(() => {
    if (success) {
      navigate(`/`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order,navigate, success]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Application Details</h2>
                <p>
                  <strong>Id: </strong> {cart.applicationdetails.id} <br />
                  <strong>Email: </strong> {cart.applicationdetails.email}<br />
                  <strong>Name: </strong> {cart.applicationdetails.name}<br />
                  <strong>Phone: </strong> {cart.applicationdetails.phone}<br />
                  <strong>College: </strong> {cart.applicationdetails.college}<br />
                  <strong>Degree: </strong> {cart.applicationdetails.degree}<br />
                </p>
              </div>
            </li>
            <li>
            
                <div className="card card-body">
                    <h2>Job Details</h2>
                       {/* <ul>
                           
                            {cart.cartItems.map((item) => (
                            <li key={item.job}>
                                <div className="row">
                  
                                    <div className="min-30">
                                         <Link to={`/jobs/${item.job}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        {item.position}
                                    </div>
                                    <div>Rs {item.salary}</div>
                                </div>
                            </li>
           
            ))}
                            </ul>*/}
                        <ul>
                        <div className="row">
                  
                          <div className="min-30">
                              <Link to={`/jobs/${job_apply.job}`}>{job_apply.name}</Link>
                          </div>
                        <div>
                            {job_apply.position}
                        </div>
                        <div>Rs {job_apply.salary}</div>
                        </div>
                          
                        </ul>
                </div>
            </li>
            
            <div className="card card-body">
            <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Apply Job
                </button>
            </li>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            </div>
           
        </ul>
        </div>
      </div>
        
    </div>
           

  );
}