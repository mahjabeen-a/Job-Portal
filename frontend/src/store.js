import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { jobDetailsReducer, jobListReducer } from './reducers/jobReducers';

const initialState = {};
const reducer = combineReducers({
    jobList : jobListReducer,
    jobDetails : jobDetailsReducer 
  });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;