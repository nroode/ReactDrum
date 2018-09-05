import React, { Component } from 'react';
import './Drum.css';
// import './music/CLAP1.aif';


export default class DrumPad extends Component {
    constructor(props) {
        super(props)
        this.playSound = this.playSound.bind(this);
        this.keydownHandler = this.keydownHandler.bind(this);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    

    playSound(e) {
        const sound = document.getElementById(this.props.id);
        // sound.currentTime = 0;
        sound.play();

        this.props.handler(this.props.clipName);
    
    }

    keydownHandler(e, props){
        if(e.keyCode === this.props.keyCode) {
        this.playSound()

      }
    }
    
      componentDidMount(){
        document.addEventListener('keydown',this.keydownHandler);
      }
    
      componentWillUnmount(){
        document.removeEventListener('keydown',this.keydownHandler);
      }


    render() {

        return (

            <div>

                <div
                    
                    className="drum-pad"
                    id={this.props.clipName}
                    onClick={this.playSound}
                   
                >
                    {this.props.id}
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