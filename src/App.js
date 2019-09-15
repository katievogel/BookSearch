import React from 'react';
import './App.css';
import Search from './components/Search';
// import Saved from './components/Saved';

function App() {
  return (
    <div className="App">
      <ul className="nav justify-content-start">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/books">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved Books</a>
        </li>
      </ul>
      <header className="App-header">
        <h1>Bookoogle</h1>
        <h3>A Google Books Search App</h3>
      </header>
      <form action="/books" method="get">
            <button class="btn btn-secondary get-articles" type="submit">Search</button>
        </form>
      <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Summary</th>
          <th>Save Book</th>
        </tr>
          <Search></Search>
        </tbody>
      </table>
    </div>
  );
}

export default App;
