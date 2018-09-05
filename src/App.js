import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body.js';
import Display from './Display.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Display />
      <Body />


      </div>
    );
  }
}

export default App;
