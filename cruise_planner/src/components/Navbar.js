import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import ShipContainer from '../containers/ShipContainer/ShipContainer';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import PortsContainer from '../containers/PortContainer/PortsContainer';

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
        <Route path="/" exact component={HomeContainer}/>
        <Route path="/ships" component={ShipContainer}/>
        <Route path="/ports" component={PortsContainer}/>
        </>
    );
}

export default navbar;