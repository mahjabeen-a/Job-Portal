import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
  
    const params = useParams();
    const jobId = params.id;
    const {search} =useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl?Number(qtyInUrl):1;
    const dispatch = useDispatch();
    useEffect(() => {
        if (jobId) {
        dispatch(addToCart(jobId, qty));
        }
    }, [dispatch, jobId, qty]);
    return (
        <div>
          <h1>Cart Screen</h1>
          <p>
            Applications: JobId: {jobId} Qty: {qty}
          </p>
        </div>
    );
}