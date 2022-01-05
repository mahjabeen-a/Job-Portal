import Axios from 'axios';
import {
  JOB_CREATE_FAIL,
  JOB_CREATE_REQUEST,
  JOB_CREATE_SUCCESS,
  JOB_DETAILS_REQUEST,
  JOB_DETAILS_FAIL,
  JOB_DETAILS_SUCCESS,
  JOB_LIST_FAIL,
  JOB_LIST_REQUEST,
  JOB_LIST_SUCCESS,
  JOB_UPDATE_REQUEST,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
} from '../constants/jobConstants';

export const createJob = () => async (dispatch, getState) => {
  dispatch({ type: JOB_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/jobs',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: JOB_CREATE_SUCCESS,
      payload: data.job,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: JOB_CREATE_FAIL, payload: message });
  }
};

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

export const updateJob = (job) => async (dispatch, getState) => {
  dispatch({ type: JOB_UPDATE_REQUEST, payload: job });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/jobs/${job._id}`, job, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: JOB_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: JOB_UPDATE_FAIL, error: message });
  }
};