import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import ShipContainer from '../containers/ShipContainer';
import Carousel from '../components/Carousel/Carousel';

const navbar = () => {
    return(
        <>
        <Navbar bg="light" expand="lg">
          <LinkContainer to='/' exact><Navbar.Brand>Cruise Planner</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to='/' exact><Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer to='/ships' ><Nav.Link>Ships</Nav.Link></LinkContainer>
                <LinkContainer to='/ports' ><Nav.Link>Ports</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact component={Carousel}/>
        <Route path="/ships" component={ShipContainer}/>
        </>
    );
}

export default navbar;