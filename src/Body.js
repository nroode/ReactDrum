import React, { Component } from 'react';
import './Drum.css';
import DrumPad from './DrumPad.js';

const sounds = [
    {
        clipName: "Heater1",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        id: "Q",
        keyCode: 81,
        color: "#FF4E50"
    },
    {
        clipName: "Heater2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        id: "W",
        keyCode: 87,
        color: "#FC913A"
    },
    {
        clipName: "Heater3",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        id: "E",
        keyCode: 69,
        color: "#F9D423"
    },
    {
        clipName: "Heater4",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        id: "A",
        keyCode: 65,
        color: "#9DE0AD"
    },
    {
        clipName: "Heater6",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        id: "S",
        keyCode: 83,
        color: "#45ADA8"
    },
    {
        clipName: "Kick1",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        id: "D",
        keyCode: 68,
        color: "#1a7e92"
    },
    {
        clipName: "Kick2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        id: "Z",
        keyCode: 90,
        color: "rgb(12, 81, 186)"
    },
    {
        clipName: "Oh",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        id: "X",
        keyCode: 88,
        color: "rgb(66, 11, 168)"
    },
    {
        clipName: "Oh2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        id: "C",
        keyCode: 67,
        color: "rgb(93, 31, 168)"
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