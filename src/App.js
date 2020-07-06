import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>Hello</h2>
      </div>
    );
  } 
}

export default App;

