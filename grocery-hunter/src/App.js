import React from 'react';
import logo from './logo.svg';
import './App.css';
import GMap from './GoogleMapsApi/maps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height: '50vh', width:'50%'}}>
          <GMap />
        </div>
      </header>
      
    </div>
  );
}

export default App;
