//shippingaddress as applicationdetails
//CART_SAVE_SHIPPING_ADDRESS as CART_SAVE_APPLICATION_DETAILS

import Axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_APPLICATION_DETAILS,
} from '../constants/cartConstants';

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
export const removeFromCart = (jobId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: jobId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveApplicationDetails = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_APPLICATION_DETAILS, payload: data });
  localStorage.setItem('applicationdetails', JSON.stringify(data));
};