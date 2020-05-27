import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './containers/HomeContainer';
import './App.css';

class App extends Component {

  render() {
    return(
      <>
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
      </>
    )
  }
}


export default App;