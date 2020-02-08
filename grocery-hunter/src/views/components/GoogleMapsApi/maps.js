import React, { Component } from 'react';
import { Map, GoogleApiWrapper} from 'google-maps-react'
import Geocode from 'react-geocode'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  }
const mapStyles = {
    width: '50%',
    height: '100%',
};
var apiKey= "AIzaSyCg1LjjFUuOhhgfJsIZ0g9m8zs5mwy3Qu0";
Geocode.setApiKey(apiKey);
Geocode.setLanguage("en");
// Geocode.setRegion("usa");

//  Geocode.fromAddress(city).then(
//     response => {
//         const {lat, lng } = response.results[0].geometry.location;
//         console.log(lat, lng);
//     },
//     error => {
//         console.error(error);
//     }
// );

class GMap extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            city: "",
            lat:"",
            long:""
        }
        // this.Geocode.fromAddress(city).then(
        //     response => {
        //         const {lat, lng } = response.results[0].geometry.location;
        //         console.log(lat, lng);
        //         this.setState({lat:lat, long:lng})
        //     },
        //     error => {
        //         console.error(error);
        //     }
        // );
    }
    // static default={
    //     center:{
    //         lat: this.state.lat,
    //         lng: this.state.long
    //     }, 
    //     zoom: 11
    // };

    

    

    render ()
    {
        return (
            <div>
                
            <Map 
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            />
            </div>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey
  })(GMap);
