import React, { Component } from 'react';
import './Drum.css';

export default class Display extends Component {
    
    render() {
        
        return (
        
        <div id="display">
            {this.props.display}
        </div>
    
    )
    }
}