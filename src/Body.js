import React, { Component } from 'react';
import './Drum.css';
import DrumPad from './DrumPad.js';

const sounds = [
    {
        clipName: "Heater",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        id: "Q",
        keyCode: 81,
        color: "#06acf1"
    },
    {
        clipName: "Heater2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        id: "W",
        keyCode: 87,
        color: "#0ce3ff"
    },
    {
        clipName: "Heater3",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        id: "E",
        keyCode: 69,
        color: "#51f0e8"
    },
    {
        clipName: "Heater4",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        id: "A",
        keyCode: 65,
        color: "#95fed0"
    },
    {
        clipName: "Clap",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        id: "S",
        keyCode: 83,
        color: "#bbee9e"
    },
    {
        clipName: "Kick",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        id: "D",
        keyCode: 68,
        color: "#e0de6d"
    },
    {
        clipName: "LowKick",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        id: "Z",
        keyCode: 90,
        color: "#f0c17f"
    },
    {
        clipName: "Snare",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        id: "X",
        keyCode: 88,
        color: "#ffa391"
    },
    {
        clipName: "Tap",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        id: "C",
        keyCode: 67,
        color: "#e78166"
    },

]

export default class Body extends Component { 

    render() {
        
        return (

            <div id="drum-machine">
                
                {sounds.map((sound, i) =>
                    <DrumPad
                        clipName={sounds[i].clipName}
                        src={sounds[i].src}
                        id={sounds[i].id}
                        key={sounds[i].clipName}
                        keyCode={sounds[i].keyCode}
                        color={sounds[i].color}
                        handler={this.props.handler}

                    />

                )}

            </div>
        )
    }
}