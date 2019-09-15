import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="nav justify-content-start">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Saved Books</a>
        </li>
      </ul>
      <header className="App-header">
        <h1>Bookoogle</h1>
        <h3>A Google Books Search App</h3>
      </header>
    </div>
  );
}

export default App;
