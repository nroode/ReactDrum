import React, { Component } from 'react';
import './App.css';
import Body from './Body.js';
import Display from './Display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    // var display='',

    this.state = {
        display: 'tree'
    }
}

handler(word) {
  this.setState({
    display: word
  })
}
  
  render() {
    return (
      <div className="App">
      
      <Display display={this.state.display} />
      <Body 
          handler={this.handler}
       />

      </div>
    );
  }
}

export default App;
