import React from 'react';
import GMap from './components/GoogleMapsApi/maps.js';
import Navbar from "./components/LandingPageNavbar.js";
import Header from "./components/SearchHeader";
import { Button, Card, Form, Input, Container, Row , Col , InputGroup, InputGroupAddon} from "reactstrap";
import {geolocated} from "react-geolocated";
import Geoloc  from "./Geoloc.js";
import { pick } from 'reactstrap/lib/utils';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state={
            stores: [{}]
        };

        this.searchData = this.searchData.bind(this);
    }
    
    async searchData(){
        const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAXBAQhszeNKHiw9L1yrGC_nOCnvfhIcAE&type=grocery_or_supermarket&location=38.962351,-95.255191&radius=1500`;
        try {
            const response = await fetch(URL).then(response => response.json())
            .then(
                data => 
                this.setState({
                    stores: data
                })
            );
            // const json = await response.json();
            // console.log('Success',JSON.stringify(json));
            console.log(this.state.stores);
          } catch (error) {
            console.error('Error:', error);
          }
        // fetch(URL, {mode: 'no-cors'})
        // .then(results => {
        //     // return results.json(); 
        //     results.json();
        // }).then(data => {
        //     let stores = data.results.map(store => {
        //         return (
        //             <div key={store.id}>
        //                 <h1>{store.price}</h1>
        //             </div>
        //         )
        //     })
            
        
        // this.setState({stores: stores});
        // console.log("state", this.state.stores);
        // })     

    }
    render(){
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
                                        <Input type="text" />   
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
                        <Geoloc {...this.props} />
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