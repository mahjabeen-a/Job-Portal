import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    //useParams() is use to get the parameter from url in <Route path
    const params = useParams();
    const jobId = params.id;
    const {search} =useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl?Number(qtyInUrl):1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (jobId) {
        dispatch(addToCart(jobId, qty));
        }
    }, [dispatch, jobId, qty]);

    const removeFromCartHandler = (id) => {
      // delete action
      dispatch(removeFromCart(id));
    };

    const applyHandler = () => {
      navigate(`/signin?redirect=/applicationform/${jobId}`);
     // navigate(`/signin?redirect=/applicationform`);
    };
  
    /*const checkoutHandler = () => {
      //props.history.push('/signin?redirect=shipping');
      navigate(`/signin?redirect=shipping`);
    };*/
    return (
      <div className="row top">
      <div className="col-2">
        <h1>Job Applied</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            No Jobs Applied. <Link to="/">Apply for jobs.</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.job}>
                <div className="row">
                  
                  <div className="min-30">
                    <Link to={`/jobs/${item.job}`}>{item.name}</Link>
                  </div>
                  <div>
                    {item.position}
                  </div>
                  <div>
                    <button onClick={() =>
                        dispatch(
                          addToCart(item.job, 1)
                        )}>1</button>
                  </div>
                  <div>Rs {item.salary}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.job)}
                    >
                      Delete
                    </button>
                    </div>
                    <div>
                    <button
                        onClick={applyHandler}
                        className="primary block"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    {/*
      <div className="col-1">
        <div className="card card-body">
          
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.salary * c.qty, 0)}
              </h2>
            </li>
            <li>
              
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
         */}   
    </div>
  );
}

