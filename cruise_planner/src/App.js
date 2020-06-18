import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {

  render() {
    return(
      <>
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
      </>
    )
  }
}


export default App;
