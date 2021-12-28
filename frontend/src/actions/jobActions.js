import Axios from 'axios';
import {
 JOB_DETAILS_REQUEST,
 JOB_DETAILS_FAIL,
 JOB_DETAILS_SUCCESS,
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

export const detailsjob = (jobId) => async (dispatch) => {
  dispatch({type: JOB_DETAILS_REQUEST , payload: jobId });
  try {
    const { data } = await Axios.get(`/api/jobs/${jobId}`);
    dispatch({ type: JOB_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: JOB_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};