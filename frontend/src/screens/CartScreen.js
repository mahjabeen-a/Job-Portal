import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function CartScreen(props) {
  
    const params = useParams();
    const jobId = params.id;
    const {search} =useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl?Number(qtyInUrl):1;
    return (
        <div>
          <h1>Cart Screen</h1>
          <p>
            Applications: JobId: {jobId} Qty: {qty}
          </p>
        </div>
    );
}