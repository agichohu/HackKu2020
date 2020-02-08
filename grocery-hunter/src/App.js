import React from 'react';
import logo from './logo.svg';
import './App.css';
import GMap from './GoogleMapsApi/maps';

// var integer = gmap.adder(5,4)


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height: '50vh', width:'50%'}}>
          <GMap/>
          <div id="map"></div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
