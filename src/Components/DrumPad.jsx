/*
* -- Required Props --
* id - Description of the sound to be played. This is the id of the button element.
* keyTrigger - The key character pressed. This is the id of the audio element.
* url - path to the sound track to be played onClick or keyPress.
*/

import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // bind methods here
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    // get the audio element
    const sound = document.getElementById(this.props.keyTrigger);
    // Play the audio element
    sound.play();
    // setTimeout to stop playing the sound after 1 second.
  }

  render() {
    const props = this.props;
    const keyTrigger = props.keyTrigger;

    return (
      <button id={props.id} className="drum-pad" onClick={this.playSound}>
        {keyTrigger}
        <audio
          className="clip"
          id={keyTrigger}
          src={props.url}
        ></audio>
      </button>
    );
  }
}

export default DrumPad;