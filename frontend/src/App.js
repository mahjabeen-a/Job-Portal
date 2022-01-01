import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import JobScreen from './screens/JobScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
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
            <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
      <Routes>
        <Route path="/cart/:id" element={<CartScreen/>}></Route>
        <Route path="/cart" element={<CartScreen/>}></Route>
        <Route path = "/jobs/:id" element = {<JobScreen/>} ></Route>
        <Route path="/signin" element={<SigninScreen/>}></Route>
        <Route path = "/" element = {<HomeScreen/>} ></Route>
      </Routes>
       
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;