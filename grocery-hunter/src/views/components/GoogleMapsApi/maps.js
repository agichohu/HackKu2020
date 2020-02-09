import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import Geocode from 'react-geocode'
import CurrentLocation from "./CurrentLocation.js"

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  }
const mapStyles = {
    width: '100%',
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
            long:"",
            location: {},
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
            // currentLatLng: {
                // lat: (this.props.coords.latitude == null ? 0 : this.props.coords.latitude),
                // lng:(this.props.coords.longitude == null ? 0 : this.props.coords.longitude)
            // }
            
            // stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
            //     {latitude: 47.359423, longitude: -122.021071},
            //     {latitude: 47.2052192687988, longitude: -121.988426208496},
            //     {latitude: 47.6307081, longitude: -122.1434325},
            //     {latitude: 47.3084488, longitude: -122.2140121},
            //     {latitude: 47.5524695, longitude: -122.0425407}]
        }
        

        this.setCity = async (cityName) =>
        {
            this.setState({city:cityName})
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
    // componentWillUpdate(){
    //     this.getGeoLocation()
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
          this.mapRef.panTo(
            new window.google.maps.LatLng(this.props.location.lat, this.props.location.lng)
            );
            new window.google.maps.Circle({
                radius: 6000 
                
            })
        }
      }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };
    
    
    // displayMarkers = () => {
    //     return this.state.stores.map((store, index) => {
    //       return <Marker key={index} id={index} position={{
    //        lat: store.latitude,
    //        lng: store.longitude
    //      }}
    //      onClick={() => console.log("You clicked me!")} />
    //     })
    //   }


    render ()
    {
        return (
            <div>
                
            {/* <Map 
            google={this.props.google}
            zoom={8}
            ref={(ref) => {
                this.mapRef = ref;
              }}
            style={mapStyles}
            center={{ lat: Number(this.state.currentLatLng.lat) , lng: Number(this.state.currentLatLng.lng)}}
            > */}
                {/* {this.displayMarkers()} */}
            
                {/* <Marker
                onClick={this.onMarkerClick}
                name={'current location'}
                position={{
                    lat: this.state.currentLatLng.lat,
                    lng: this.state.currentLatLng.lng
                }}
                /> */}
                {/* <Marker position={new window.google.maps.LatLng(this.state.currentLatLng.lat, this.state.currentLatLng.lng)} />
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
                </InfoWindow> */}

            {/* </Map> */}

            <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
        >
            <Marker onClick={this.onMarkerClick} name={'current location'} />
            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>
        </CurrentLocation>
            </div>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey
  })(GMap);
