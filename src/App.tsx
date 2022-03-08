import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from './routes';
import Navbar from './utils/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes />
    </div>
  );
}

export default App;
