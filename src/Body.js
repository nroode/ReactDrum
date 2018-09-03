import React, { Component } from 'react';
import './Drum.css';
import DrumPad from './DrumPad.js';



export default class Body extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const sounds = [
            {
                clipName: "Clap",
                src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
                id: "Q",
                
            },
            {
                clipName: "Conga1",
                src: "./music/CONGA1.aif",
                id: "W",
                

            },
            {
                clipName: "Conga2",
                src: "./music/CONGA2.aif",
                id: "E",
                

            },

        ]

        const element = (<div>Text from Element</div>)


        return (

            <div id="drum-machine">
                <h3>Drum Body</h3>

                {sounds.map((sound, i) =>
                    <DrumPad
                        clipName={sounds[i].clipName}
                        src={sounds[i].src}
                        id={sounds[i].id}
                        key={sounds[i].clipName}
                    />

                )}


                {this.props.displaytext}

                

                {element}

            </div>
        )
    }
}