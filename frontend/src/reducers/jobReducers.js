const {
    JOB_LIST_FAIL,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL,
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_CREATE_REQUEST,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_FAIL,
    JOB_CREATE_RESET,
   } = require ('../constants/jobConstants');

  export const jobCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case JOB_CREATE_REQUEST:
        return { loading: true };
      case JOB_CREATE_SUCCESS:
        return { loading: false, success: true, job: action.payload };
      case JOB_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case JOB_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const jobListReducer = (
    state = { loading: true, jobs: [] },
    action
    ) => {
    switch (action.type) {
      case JOB_LIST_REQUEST:
        return { loading: true };
      case JOB_LIST_SUCCESS:
        return { loading: false, jobs: action.payload };
      case JOB_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const jobDetailsReducer = (
    state = { job : {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case JOB_DETAILS_REQUEST:
        return { loading: true };
      case JOB_DETAILS_SUCCESS:
        return { loading: false, job : action.payload };
      case JOB_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  