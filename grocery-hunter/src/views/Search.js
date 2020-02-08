import React from 'react';
import GMap from './components/GoogleMapsApi/maps.js';
import Navbar from "./components/LandingPageNavbar.js";
import Header from "./components/SearchHeader";
import { Button, Card, Form, Input, Container, FormGroup, Row , Col , InputGroup, InputGroupAddon} from "reactstrap";

function Search() {
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
                                        <InputGroupAddon addonType="append"><Button color="success"> Search </Button> </InputGroupAddon> 
                                    </InputGroup>
                                </Col>
                                <Col xs="2"> </Col>
                            </Row>
                            
                        </Form>

                        <Card>
                        <div style={{height: '50vh'}}>
                            <GMap />
                        </div>
                        </Card>
                        
                    </Container>
                    

                    
                </div>

            </div>
        </div>
        
    </>
  );
}

export default Search;