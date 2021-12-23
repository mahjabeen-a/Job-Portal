import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import JobScreen from './screens/JobScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Job Portal
          </a>
        </div>
        <div>
        <h3><a href="/">Find the perfect job!</a></h3>
        </div>
        <div>
          <a href="/cart">Applications</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
      <Routes>
        <Route path = "/jobs/:id" element = {<JobScreen/>} ></Route>
        <Route path = "/" element = {<HomeScreen/>} ></Route>
      </Routes>
       
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;