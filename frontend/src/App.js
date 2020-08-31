import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const makeRequestToApi = () => {
    axios.get('/api/auth-us')
        .then(response => {
          console.log(response.data);
        })
        .catch(console.error);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Docker
        </a>
      </header>
        <button onClick={makeRequestToApi}>
            Make request
        </button>
    </div>
  );
}

export default App;
