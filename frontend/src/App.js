import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import JobScreen from './screens/JobScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ApplicationScreen from './screens/ApplicationScreen';

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
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
        </div>
      </header>
      <main>
      <Routes>
        <Route path="/cart/:id" element={<CartScreen/>}></Route>
        <Route path="/cart" element={<CartScreen/>}></Route>
        <Route path = "/jobs/:id" element = {<JobScreen/>} ></Route>
        <Route path="/signin" element={<SigninScreen/>}></Route>
        <Route path="/register" element={<RegisterScreen/>}></Route>
        <Route path="/applicationform" element={<ApplicationScreen/>}></Route>
        <Route path = "/" element = {<HomeScreen/>} ></Route>
      </Routes>
       
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;