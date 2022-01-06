import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import ApplicationScreen from './screens/ApplicationScreen';
import CartScreen from './screens/CartScreen';
import ConfirmApplyScreen from './screens/ConfirmApplyScreen';
import HistoryScreen from './screens/HistoryScreen';
import HomeScreen from './screens/HomeScreen';
import JobEditScreen from './screens/JobEditScreen';
import JobListScreen from './screens/JobListScreen.js';
import JobScreen from './screens/JobScreen';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import OrderListScreen from './screens/ApplyListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            Job Portal
          </Link>
        </div>
        <div>
        <SearchBox />
        </div>
        <div>
        <h3><Link to="/">Find the perfect job!</Link></h3>
        </div>
        <div>
        <Link to="/cart">
              Applications
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/joblist">Jobs</Link>
                  </li>
                  <li>
                    <Link to="/applist">Applications</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </header>
      <main>
      <Routes>
        <Route path="/cart/:id" element = {<CartScreen/>}></Route>
        <Route path="/cart" element = {<CartScreen/>}></Route>
        <Route path = "/jobs/:id" element = {<JobScreen/>} exact ></Route>
        <Route path = "/jobs/:id/edit" element = {<JobEditScreen/>} exact ></Route>
        <Route path="/signin" element = {<SigninScreen/>}></Route>
        <Route path="/register" element = {<RegisterScreen/>}></Route>
        <Route path="/applicationform/:id" element = {<ApplicationScreen/>}></Route>
        <Route path="/apply/:id" element = {<ConfirmApplyScreen/>}></Route>
        <Route path = "/" element = {<HomeScreen/>} ></Route>
        <Route path="/orderhistory" element={<HistoryScreen/>}></Route>
        <Route path="/profile" element={<PrivateRoute><ProfileScreen /></PrivateRoute>}/>
        <Route path="/joblist" element={<AdminRoute><JobListScreen /></AdminRoute>}/>
        <Route path="/applist" element={<AdminRoute><OrderListScreen /></AdminRoute>}/>
        <Route path="/userlist" element={<AdminRoute><UserListScreen /></AdminRoute>}/>
        <Route path="/user/:id/edit" element={<AdminRoute><UserEditScreen /></AdminRoute>}/>
        <Route path="/search/name" element={<SearchScreen />} exact></Route>
        <Route path="/search/name/:name" element={<SearchScreen />} exact></Route>
      </Routes>
       
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;