import React, { Component } from 'react';
import './App.css';
import Body from './Body.js';
import Display from './Display.js';


class App extends Component {


  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.resize = this.resize.bind(this);
    this.state = {
      display: '',
      color: '',
      effectStyle: 'inactive',
    }
  }

  resize() {
    this.setState({
      effectStyle: 'inactive',
    })

  }

  handler(word, color) {

    this.setState({
      display: word,
      color: color,
      effectStyle: 'active',
    })

    setTimeout(() => this.resize(), 500);

  }

  render() {
    return (
      <div className="App">
        <div id="effect-wrapper">
          <div id="effect-hide-outer"></div>
            <div id="effect-hide"></div>
          
          <div id="effect" className={this.state.effectStyle} style={{ borderColor: `${this.state.color}` }}></div>
        </div>
        <Display
          display={this.state.display}
        />
        <Body
          handler={this.handler}
        />

      </div>
    );
  }
}

export default App;


