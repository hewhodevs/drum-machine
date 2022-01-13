/*
* -- Required Props --
* trackTitle - A description of the sound played
* text - button text to be displayed
* url - path to the sound track
*/

import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // bind methods here
  }

  render() {
    const props = this.props;
    const trigger = props.trigger;

    return (
      <button id={props.id} className="drum-pad">
        {trigger}
        <audio
          className="clip"
          id={trigger}
          src={props.url}
        ></audio>
      </button>
    );
  }
}

export default DrumPad;