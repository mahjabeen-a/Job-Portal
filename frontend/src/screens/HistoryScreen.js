import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistoryScreen(props) {
  //const navigate = useNavigate();
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div>
      <h1>Applications History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>APPLICATIONS</th>
              <th>APPLIED ON</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.orderItems.map((item) => (
                    <React.Fragment key={item._id}>
                    <p>{item.name}: {item.position}</p>
                    </React.Fragment>
                ))}
                </td>
                <td>{order.createdAt}</td>
        
                {/* <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                        navigate(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                </td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}