import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecordList from './FoodTable';
import Create from './FoodForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
 };

export default App;


