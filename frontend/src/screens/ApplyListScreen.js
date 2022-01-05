import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderListScreen(props) {
  const navigate = useNavigate();
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);
  const deleteHandler = (order) => {
    // TODO: delete handler
  };
  return (
    <div>
      <h1>Orders</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>APPLICATIONS</th>
              <th>APPLIED ON</th>

             {/* <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>*/}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>              
                <td>{order.orderItems.map((item) => (
                    <React.Fragment key={item._id}>
                    <p>{item.name}: {item.position}</p>
                    </React.Fragment>
                ))}
                </td>
                <td>{order.createdAt.substring(0, 10)}</td>
               <td>
                   {/*
                
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                        navigate(`/order/${order._id}`);
                    }}
                  >
                    Details
                </button>*/}
                  <button
                    type="button"
                    className="small"
                    onclick={() => deleteHandler(order)}
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