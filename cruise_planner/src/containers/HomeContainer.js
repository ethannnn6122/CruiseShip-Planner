import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

class HomeContainer extends Component {
    render() {
        return( 
            <Container fluid >
                <Navbar/>
            </Container>
        )
    }
}

export default HomeContainer;