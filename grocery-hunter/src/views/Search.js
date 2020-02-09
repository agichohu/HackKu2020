import React from 'react';
import GMap from './components/GoogleMapsApi/maps.js';
import Navbar from "./components/LandingPageNavbar.js";
import Header from "./components/SearchHeader";
import { Button, Card, Form, Input, Container, Row , Col , InputGroup, InputGroupAddon} from "reactstrap";
import {geolocated} from "react-geolocated";
// import { pick } from 'reactstrap/lib/utils';
// import {cloneDeep} from 'lodash';
class Search extends React.Component {
    constructor(props){
        super(props);

        var data = require("./data.json");
        this.state={
            storesName: data,
            storesLat: [{}],
            storesLng: [{}],
            input: " "

        };
        this.formUpdate = (event) => {
            this.setState({ input: event.target.value });
        }

        this.searchData = this.searchData.bind(this);
    }
    
    // async searchData(){
        // const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAXBAQhszeNKHiw9L1yrGC_nOCnvfhIcAE&type=grocery_or_supermarket&location=38.962351,-95.255191&radius=20000`;
        // const URL = `./data.json`;
        // try {
        //     const response = await fetch(URL).then(response => response.text())
        //     .then(
        //         data => 
        //         this.setState({
        //             storesName: data,
        //             storesLat: data,
        //             storesLng: data
        //         })
        //     );
        //     // const json = await response.json();
        //     // console.log('Success',JSON.stringify(json));
            
        //     console.log(this.state.storesName);
        //     console.log("Here:" ,this.state.storesName);

        //   } catch (error) {
        //     console.error('Error:', error);
        //   }      
    // }

    searchData() {
        let searchString = this.state.input.toLowerCase();
        console.log("Search String is ", searchString);
        var filteredGrocery = this.state.storesName.filter( grocery => grocery.name.toLowerCase().includes(searchString) );
        console.log("Hi",filteredGrocery);
    }
    render(){
        console.log(this.state.storesName);
        console.log(this.state.input);
        return (
            <>
            <Navbar />
            <Header />
            <div className="main">
                <div className="owner">
                    <div className="avatar">
                    {/* <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("./components/search.png")}
                    /> */}
                    
                    </div>
    
                    <div className="name">
                    <Container>
                        <Form >
                            <h4 className="title">
                                Nearby Grocery Deals <br />
                            </h4>
                            <h6 className="description">Helping you to search the best deals</h6>                    
                            <Row>
                                <Col xs="2"></Col>
                                <Col xs="8">
                                    <InputGroup>
                                        <Input type="text" value={this.state.input} onChange={this.formUpdate} />   
                                        <InputGroupAddon addonType="append">
                                            <Button color="success"onClick={this.searchData}> Search </Button> 
                                        </InputGroupAddon> 
                                    </InputGroup>
                                </Col>
                                <Col xs="2"> </Col>
                            </Row>
                            
                        </Form>
                        <br />
                        <Row>
                            <Col xs="2"></Col>
                            <Col xs="8">
                                <Card>
                                    <div style={{height: '50vh',width:"100%"}}>
                                        <GMap {...this.props} stores={this.state.stores}/>
                                    </div>
                                </Card>
                            </Col>

                            <Col xs="2"></Col>
                        </Row>
                        {/* <Geoloc {...this.props} /> */}
                        {/* <h1>{this.props.coords.latitude}</h1> */}
                    </Container>

                    </div>
    
                </div>
            </div>
        </>
      );
    }
  
}

export default geolocated({
    positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 10000
})(Search);