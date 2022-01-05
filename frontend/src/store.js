//shippingaddress as applicationdetails
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { jobDetailsReducer, jobListReducer } from './reducers/jobReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderMineListReducer,} from './reducers/orderReducers';
import { userSigninReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
      applicationdetails: localStorage.getItem('applicationdetails')
      ? JSON.parse(localStorage.getItem('applicationdetails'))
      : {},
  },
};
const reducer = combineReducers({
    jobList : jobListReducer,
    jobDetails : jobDetailsReducer ,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
  });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;