import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Job Portal
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.jobs.map((job) => (
              <div key={job._id} className="card">
                <div className="card-body">
                  <a href={`/job/${job._id}`}>
                    <h2>{job.name}</h2>
                  </a>
                  <div className="price">{job.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;