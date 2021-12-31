import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (jobId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/jobs/${jobId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      position: data.position,
      salary: data.salary,
      vacancy: data.vacancy,
      count_applicants: data.count_applicants,
      job: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};