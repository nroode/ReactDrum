import React, { Component } from 'react';
import './Drum.css';
// import './music/CLAP1.aif';


export default class DrumPad extends Component {
    constructor(props) {
        super(props)
        this.playSound = this.playSound.bind(this);
    }

    playSound(e) {
        const sound = document.getElementById(this.props.id);
        // sound.currentTime = 0;
        sound.play();
        
    }


    render() {

        return (

            <div>

                <div
                    
                    className="drum-pad"
                    id={this.props.clipName}
                    onClick={this.playSound}
                >
                    <h3>{this.props.id}</h3>
                    <audio
                        src={this.props.src}
                        className="clip"
                        id={this.props.id}>
                    </audio>

                </div>

            </div>
        )
    }
}