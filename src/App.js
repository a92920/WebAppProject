import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Assignment from './components/AssignmentComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">AUP</NavbarBrand>
          </div>
        </Navbar>
       
        < Assignment />
      </div>
    );
  }
}

export default App;
