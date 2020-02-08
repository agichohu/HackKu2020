import React from 'react';
import GMap from './components/GoogleMapsApi/maps.js';

function Search() {
  return (
    <div style={{height: '50vh', width:'50%'}}>
        <GMap />
    </div>
  );
}

export default Search;