import logo from './logo.svg';
import './App.css';

import { Route } from 'react';
import { Navbar } from 'react';
import { Routes } from 'react';
import { FoodTable } from 'react';
import { FoodForm } from 'react';

function App() {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<FoodTable/>} />
        <Route path="/create" element={<FoodForm/>} />
      </Routes>
    </div>
  );
 };

export default App;


