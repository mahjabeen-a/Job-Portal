import Axios from 'axios';
import {
 JOB_LIST_FAIL,
 JOB_LIST_REQUEST,
 JOB_LIST_SUCCESS,
} from '../constants/jobConstants';

export const listjobs = () => async (dispatch) => {
  dispatch({
    type:JOB_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/jobs');
    dispatch({ type:JOB_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type:JOB_LIST_FAIL, payload: error.message });
  }
};