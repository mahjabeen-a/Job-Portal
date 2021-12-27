const {
    JOB_LIST_FAIL,
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
   } = require ('../constants/jobConstants');
   
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