import React, { Component } from 'react';
import { Map, GoogleApiWrapper} from 'google-maps-react'
import {GoogleMapReact} from 'google-map-react'
import M from 'minimatch';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  }
  const mapStyles = {
    width: '50%',
    height: '100%',
  };

class GMap extends Component
{
    static default={
        center:{
            lat: 67.76,
            lng: 55.45
        }, 
        zoom: 11
    }

    

    render ()
    {
        return (
            <Map 
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCg1LjjFUuOhhgfJsIZ0g9m8zs5mwy3Qu0'
  })(GMap);